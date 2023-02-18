import HeaderBtn from './HeaderBtn';
import MainImg from '../../assets/Shingo.png';
import HeaderLinks from './HeaderLinks';

import '../../index.css';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Shingo Kise</h1>
        <h5 className='text-light'>
          MSCS student at City University of Seattle
        </h5>
        <HeaderBtn />
        <HeaderLinks />

        <div className='me'>
          <img src={MainImg} alt='self image' />
        </div>
      </div>
    </header>
  );
};

export default Header;
