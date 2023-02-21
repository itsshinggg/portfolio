import './Works.css';
import PortfolioImg from '../../assets/download.jpeg';

const Works = () => {
  return (
    <section id='works'>
      <h5>My Works!</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={PortfolioImg} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shingggk/portfolio'
              className='btn'
              target='_blank'
            >
              Github
            </a>
            <a href='' className='btn btn-primary' target='_black'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={PortfolioImg} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shingggk/portfolio'
              className='btn'
              target='_blank'
            >
              Github
            </a>
            <a href='' className='btn btn-primary' target='_black'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={PortfolioImg} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shingggk/portfolio'
              className='btn'
              target='_blank'
            >
              Github
            </a>
            <a href='' className='btn btn-primary' target='_black'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={PortfolioImg} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shingggk/portfolio'
              className='btn'
              target='_blank'
            >
              Github
            </a>
            <a href='' className='btn btn-primary' target='_black'>
              Live Demo
            </a>
          </div>
        </article>{' '}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={PortfolioImg} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shingggk/portfolio'
              className='btn'
              target='_blank'
            >
              Github
            </a>
            <a href='' className='btn btn-primary' target='_black'>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Works;
