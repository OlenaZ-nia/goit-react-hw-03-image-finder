import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, largeImageURL, onClick }) => {
    return (
        <li className={s.galleryItem}>
            <img className={s.galleryItemImg } src={src} alt={alt} onClick={()=>onClick(largeImageURL, alt)}/>
        </li>
    )
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
