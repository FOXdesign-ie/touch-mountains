import '../styles/HeroSection.css';
import {Button} from './Button';

const HeroSection = (props) => {
    return (
        <div className='hero-container'>
            <video src={props.video} poster={props.poster} autoPlay loop muted />
            
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <div className='hero-btns'>
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    <a href={props.link}>Explore {props.linkPlace} </a>
                </Button>
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    <a href={props.linkVideo} target='blank'>WATCH TRAILER </a><i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
};

export default HeroSection;
