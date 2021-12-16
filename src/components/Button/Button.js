import s from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onClickLoadMore }) => {
    return (
        <button type="button" className={s.button} onClick={onClickLoadMore}>Load more</button>
    )
}

Button.propTypes = {
    onClickLoadMore: PropTypes.func.isRequired,
}