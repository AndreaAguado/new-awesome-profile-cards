import '../styles/layout/Header.scss';
import logo from '../images/awesome-logo-card.png';
const Header = () => {
  return (
    <header className='header'>
      <a href={'./index.html'} target='_blank' rel='noreferrer'>
        <img src={logo} alt='Awesome profile cards' className='header__img' />
      </a>
    </header>
  );
};
export default Header;
