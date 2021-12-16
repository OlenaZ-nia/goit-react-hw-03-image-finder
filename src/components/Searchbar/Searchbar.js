import React, { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({
      query: e.currentTarget.value
        });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (this.state.query.trim() === '') {
      toast.error('Enter query!');
      return;
    }

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };
  
  render() {
      return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.searchButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"/></svg>
              <span className={s.searchButtonLabel}>Search</span>
            </button>
            <input
              className={s.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
      </header>  
    )
    }
}

Searchbar.propTypes = {
   onSubmit: PropTypes.func.isRequired,
}