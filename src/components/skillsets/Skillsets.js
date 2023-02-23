import './Skillsets.css';
import './Skillsets.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import AWSBadge from '../../assets/AWS-badge.png';

const Skillsets = () => {
  return (
    <section id='skillsets'>
      <h5>My skillsets</h5>
      <h2>My skils</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Dynamo DB</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Frameworks & Others</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Prior Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Certifications</h3>
          <div className='experience__content'>
            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>AWS Associate Solutions Architect</h4>
                </div>
              </article>
              <img
                src={AWSBadge}
                alt='AWS certification badge'
                className='certification__icons'
              />
            </div>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='text-light'>Linux+</h4>
                <small className='text-light'>Currently Studying</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillsets;
