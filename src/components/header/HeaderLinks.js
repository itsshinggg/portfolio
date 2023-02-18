import { BsLinkedin } from 'react-icons/bs';
import { GrGithub } from 'react-icons/gr';

import './Header.css';
import '../../index.css';
const HeaderLinks = () => {
  return (
    <div className='header__links'>
      <a href='https://www.linkedin.com/in/shingokise' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/shingggk' target='_blank'>
        <GrGithub />
      </a>
    </div>
  );
};

export default HeaderLinks;
