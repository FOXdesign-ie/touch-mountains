import HeroSection from '../components/HeroSection';
import SignUp from '../components/SignUp';
import '../styles/Footer.css';
import '../styles/Contact.css';
import ContactImg from '../assets/images/karakoram4.jpg';
import karakoramImg from '../assets/images/Karakoram.jpg';
import contactVideo from '../assets/videos/contact.mp4';

const ContactPage = () => {
    return(
      <>
        <HeroSection 
          poster={karakoramImg}
          video={contactVideo}
          title='CONTACT US'
          subtitle='Contact us and experience an unforgettable adventure' 
          link='/mountains/places/karakoram'
          linkPlace='Karakoram'
          linkVideo='https://www.youtube.com/watch?v=JBK_5-2UsNA'
        />

        <div className='contact'>
              <h2> We'd <i class="far fa-heart"></i> to help!</h2>
              <hr />
              <p>You can contact us using the form, you can call us, send an email or just visit us in Tasch, Switzerland. </p>
              <div className='contact-container'>
                  <div className='contact-form'>
                        <input type="text" name='name' placeholder='Your name'/> <br/><br/>
                        <input type="email" name='email' placeholder='Your email'/><br/><br/>
                        <textarea  name="message"  placeholder='Your message'/><br/><br/>
                        <input type="submit" value="Submit"/>
                  </div>
                  <div className='contact-details'>
                      <div><i class="far fa-compass"></i>Tasch, Switzerland</div>
                      <div><i class="fas fa-mobile-alt"></i>+41 1212 22 344</div>
                      <div><i class="far fa-envelope"></i>contact@touchmountain.com</div>
                  </div>
              </div>
              <img src={ContactImg} alt='#' />
        </div>
        <SignUp />  
     </>
    )
};

export default ContactPage;