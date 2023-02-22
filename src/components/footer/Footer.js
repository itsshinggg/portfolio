import './Footer.css';

import { BsLinkedin } from 'react-icons/bs';
import { GrGithub } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__name'>
        Shingo Kise
      </a>
      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/shingokise' target='_blank'>
          <BsLinkedin />
        </a>
        <a href='https://github.com/shingggk' target='_blank'>
          <GrGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
