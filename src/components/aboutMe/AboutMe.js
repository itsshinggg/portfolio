import './AboutMe.css';
import Headshot from '../../assets/Headshot.png';
import { AiFillQuestionCircle } from 'react-icons/ai';

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Headshot} alt='Headshot' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <AiFillQuestionCircle className='about__icon' />
              <h5>Experience</h5>
              <small>CS student</small>
            </article>
            <article className='about__card'>
              <AiFillQuestionCircle className='about__icon' />
              <h5>Experience</h5>
              <small>CS student</small>
            </article>
            <article className='about__card'>
              <AiFillQuestionCircle className='about__icon' />
              <h5>Experience</h5>
              <small>CS student</small>
            </article>
          </div>
          <p>
            dfakjsnfasnd
            kfnasdnf;lasnd;flnas;ldfna;skdnf;laskndf;lkansd;lfknas;dknf;alskndf;lkasnd;lfknas;lkdnf;askndf;lkn
            faosifjaso;ijfaoijf asd asdfjas;dofasdfas;odjfasdfsdfojasdfas
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
