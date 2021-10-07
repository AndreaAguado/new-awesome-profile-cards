import { Link } from 'react-router-dom';
import landingLogo from '../images/awesome-logo-card.png';
import LandingButton from './LandingButton';

const Landing = () => {
  return (
    <section class='page'>
      <article class='main_index'>
        <img src={landingLogo} alt='Imagen del Logo' class='main__img' />
        <section class='main__container'>
          <h1 class='main__tittle'>Crea tu tarjeta de visita</h1>
          <p class='main__text'>
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </section>

        <section class='main__section'>
          <ul class='main__section--ul'>
            <li class='main__section--ul--li'>
              <h2 class='main__section--ul--li--tittle'>Diseña</h2>
              <span class='main__section--ul--li--icon'>
                <i class='far fa-object-ungroup'></i>
              </span>
            </li>
            <li class='main__section--ul--li'>
              <h2 class='main__section--ul--li--tittle'>Rellena</h2>
              <span class='main__section--ul--li--icon'>
                <i class='far fa-keyboard'></i>
              </span>
            </li>
            <li class='main__section--ul--li'>
              <h2 class='main__section--ul--li--tittle'>Comparte</h2>
              <span class='main__section--ul--li--icon'>
                <i class='fas fa-share-alt'></i>
              </span>
            </li>
          </ul>
        </section>
      </article>
      <Link to='/cards'>
        <LandingButton className='main__botom' text='COMENZAR'></LandingButton>
      </Link>
    </section>
  );
};
export default Landing;
