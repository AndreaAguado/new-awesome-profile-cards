import { Link } from 'react-router-dom';
import landingLogo from '../images/awesome-logo-card.png';
import Footer from './Footer';
import LandingButton from './LandingButton';

const Landing = () => {
  return (
    <section className='page'>
      <article className='main_index'>
        <img src={landingLogo} alt='Imagen del Logo' className='main__img' />
        <section className='main__container'>
          <h1 className='main__tittle'>Crea tu tarjeta de visita</h1>
          <p className='main__text'>
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </section>

        <section className='main__section'>
          <ul className='main__section--ul'>
            <li className='main__section--ul--li'>
              <h2 className='main__section--ul--li--tittle'>Diseña</h2>
              <span className='main__section--ul--li--icon'>
                <i className='far fa-object-ungroup'></i>
              </span>
            </li>
            <li className='main__section--ul--li'>
              <h2 className='main__section--ul--li--tittle'>Rellena</h2>
              <span className='main__section--ul--li--icon'>
                <i className='far fa-keyboard'></i>
              </span>
            </li>
            <li className='main__section--ul--li'>
              <h2 className='main__section--ul--li--tittle'>Comparte</h2>
              <span className='main__section--ul--li--icon'>
                <i className='fas fa-share-alt'></i>
              </span>
            </li>
          </ul>
        </section>

        <Link to='/cards'>
          <LandingButton
            className='main__botom'
            text='COMENZAR'
          ></LandingButton>
        </Link>
      </article>
      <Footer />
    </section>
  );
};
export default Landing;
