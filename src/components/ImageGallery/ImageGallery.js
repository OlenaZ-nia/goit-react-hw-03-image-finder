import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images, onClickImg}) => {
    return (
        <ul className={s.gallery} id='gallery'>
            {images && images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem key={id} src={webformatURL} largeImageURL={largeImageURL} alt={tags} onClick={ onClickImg}/>  
            ))}   
        </ul>
    )
}

ImageGallery.propTypes = {
     images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }).isRequired,
    ),
    onClickImg: PropTypes.func.isRequired,
 }