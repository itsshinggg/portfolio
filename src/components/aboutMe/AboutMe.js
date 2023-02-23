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
            I'm a first-year graduate student in Computer Science at City
            University of Seattle.
          </p>
          <p>
            I graduated from the University of Oregon in 2018 with a major in
            General Science and a minor in Business Administration.
          </p>
          <p>
            With 10 years of experience living in an international and
            multicultural environment, I've developed strong self-motivation and
            organizational skills. I thrive in fast-paced, multitasking
            environments and possess an outstanding work ethic. I approach
            challenges with creativity, enthusiasm, and humor, and prioritize
            effectively to achieve objectives.
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
