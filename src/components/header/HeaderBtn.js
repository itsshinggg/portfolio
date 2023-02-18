import Resume from '../../assets/Resume Template.dotx';

import '../../index.css';
import './Header.css';

const HeaderBtn = () => {
  return (
    <div className='headerbtns'>
      <a href={Resume} download className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default HeaderBtn;
