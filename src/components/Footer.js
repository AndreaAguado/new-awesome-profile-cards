import '../styles/layout/Footer.scss';

import logo3 from '../images/logo-adalab.png';
const Footer = () => {
  return (
    <footer className='page__footer'>
      <small className='copy'> Awesome profile-cards &copy; 2021 </small>
      <a href={'https://adalab.es/'} target='_blank' rel='noreferrer'>
        <img
          src={logo3}
          alt='adalab logo'
          title='adalab logo'
          className='adalab__logo'
        />
      </a>
    </footer>
  );
};
export default Footer;
