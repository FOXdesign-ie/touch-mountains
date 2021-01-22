import {Link} from 'react-router-dom';

const Place = (props) => {
    return(
        <>
            <li className='place__item'>
                <Link className='place__item__link' to={props.path}>
                    <figure className='place__item__img-wrap' data-category={props.label}>
                        <img src={props.src} alt='#' className='place__item__img' />
                    </figure>
                    <div className='place__item__info'>
                        <h5 className='place__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>

        </>
    )
};

export default Place;