import { useState } from 'react';

import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { VscPerson } from 'react-icons/vsc';
import { VscFileCode } from 'react-icons/vsc';
import { SiXcode } from 'react-icons/si';

const Nav = () => {
  const [currentNav, setCurrentNav] = useState('#');

  return (
    <nav>
      <a
        href='#'
        onClick={() => {
          setCurrentNav('#');
        }}
        className={currentNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#aboutMe'
        onClick={() => {
          setCurrentNav('aboutMe');
        }}
        className={currentNav === 'aboutMe' ? 'active' : ''}
      >
        <VscPerson />
      </a>
      <a
        href='#skillsets'
        onClick={() => {
          setCurrentNav('skillsets');
        }}
        className={currentNav === 'skillsets' ? 'active' : ''}
      >
        <VscFileCode />
      </a>
      <a
        href='#works'
        onClick={() => {
          setCurrentNav('works');
        }}
        className={currentNav === 'works' ? 'active' : ''}
      >
        <SiXcode />
      </a>
    </nav>
  );
};

export default Nav;
