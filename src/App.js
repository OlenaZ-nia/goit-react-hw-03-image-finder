import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { Container } from './components/Container/Container';
import Loader from "react-loader-spinner";
import  imgApi from './api/pixabey-api';
import Searchbar from './components/Searchbar/Searchbar';
import  {ImageGallery}  from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import { Button } from './components/Button/Button';
import { mapper } from './helpers/mapper';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    modalImg: '',
    alt: '',
  };
  
  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.searchQuery !== this.state.searchQuery || PrevState.currentPage !==this.state.currentPage) {
      this.fetchImg();
    }
  }

  fetchImg = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });
    
    imgApi
      .fetchImg(searchQuery, currentPage)
      .then(images => {
        if (images.total === 0) {
          return toast.error('Not found!')
        }
        
        this.setState(prevState => ({
          images: [...prevState.images, ...mapper(images.hits)],
        }));

        setTimeout(() => {
          document.querySelector('#gallery').scrollIntoView({
            behavior: 'smooth', block: 'end',
          });
        }, 1000)
      })
    .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  }

  onClickLoadMore = () => {
    this.setState(prevState => ({
          currentPage: prevState.currentPage + 1,
        }));
  };

  onChangeQuery = (query) => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    }

  onClickImg = (img, alt) => {
    this.setState({
      showModal: true,
      modalImg: img,
      alt: alt,
    })
  }


  render() {
    const { images, isLoading, showModal, modalImg, alt } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ToastContainer autoClose={3000} theme={ 'dark'}/>

        {images.length>0 && <ImageGallery images={images} onClickImg={this.onClickImg} />}

        {isLoading && <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000} 
      />}

        {images.length > 11 && <Button onClickLoadMore={this.onClickLoadMore} />}
        
        {showModal && (
          <Modal src={modalImg } alt={alt} onClose={ this.toggleModal}/>
        )}
      </Container>
  );
  }
}

export default App;
