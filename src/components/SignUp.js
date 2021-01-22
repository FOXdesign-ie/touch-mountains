import '../styles/SignUp.css';
import mountainImg from '../assets/images/drawing.png';

const SignUp = () => {
    return (
        <>
            <section className='sign-up'>
                <h1 className='sign-up__heading'>
                    Join the Touch Mountain to receive our the best trip deals!
                </h1>
                <p className='sign-up__text'>
                    You can unsubscribe us any time you wish ... and stay at home.
                </p>
                <div>
                    <form>
                        <input className='sign-up__input' type='email' name='email' placeholder='Your email'/>
                        <button className='sign_up__button'>Subscribe</button>
                    </form>
                </div>
                <div className='sign-up__img'>
                    <img src={mountainImg} alt='mountain drawing'/>
                </div>
            </section>
        </>
    )
};

export default SignUp;