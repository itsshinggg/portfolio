import { useState } from 'react';

import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { VscPerson } from 'react-icons/vsc';
import { VscFileCode } from 'react-icons/vsc';
import { SiXcode } from 'react-icons/si';
import { FcContacts } from 'react-icons/fc';

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
      <a
        href='#contacts'
        onClick={() => {
          setCurrentNav('contacts');
        }}
        className={currentNav === 'contacts' ? 'active' : ''}
      >
        <FcContacts />
      </a>
    </nav>
  );
};

export default Nav;
