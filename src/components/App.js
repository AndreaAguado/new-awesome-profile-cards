import '../styles/App.scss';
import logo from '../images/awesome-logo-card.png';
// import logo2 from '../images/jessicawalsh.jpg';
import logo3 from '../images/logo-adalab.png';

function App() {
  return (
    <div>
      <div className='page_interactive'>
        <header className='header'>
          <a href={'./index.html'} target='_blank' rel='noreferrer'>
            <img
              src={logo}
              alt='Awesome profile cards'
              className='header__img'
            />
          </a>
        </header>

        <main className='main_interactive'>
          <section className='card__first__view'>
            <div className='card__result'>
              <button className='button__reset js_reset'>
                <i className='far fa-trash-alt'></i> reset
              </button>

              <div className='card__example palette_0 js_palette_result'>
                <div className='text__section color_line js_text_section'>
                  <h3 className='name__card color_text js_text_result'>
                    Nombre Apellido
                  </h3>
                  <h4 className='job__name color_job js_text_result'>
                    Front-end developer
                  </h4>
                </div>

                <div className='photo__example'>
                  <div
                    alt='yourlogo'
                    title='yourlogo'
                    className='photo__example--logo profile__image js__profile-image'
                    //style='background-image: url(./assets/images/jessicawalsh.jpg)'
                  ></div>
                </div>

                {/* <img
                  src={logo2}
                  className='photo__example'
                  alt='yourlogo'
                  title='yourlogo'
                /> */}

                <div className='link__section'>
                  <a
                    className='circle__awesome color_circle js_link_result'
                    href={'tel:'}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fas fa-mobile-alt'></i>
                  </a>

                  <a
                    className='circle__awesome color_circle js_link_result'
                    href={'mailto:'}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='far fa-envelope'></i>
                  </a>

                  <a
                    className='circle__awesome color_circle js_link_result'
                    // href={'#'}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-linkedin-in'></i>
                  </a>

                  <a
                    className='circle__awesome color_circle js_link_result'
                    // href={'#'}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-github-alt'></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <form className='form js_form'>
            <section className='select'>
              <fieldset className='desing'>
                <section className='section--title desing__title js_collapsable_title'>
                  <i className='far fa-object-ungroup icon'></i>
                  <h3 className='title title2'>Diseña</h3>
                  <i className='fas fa-chevron-down arrow js_arrow'></i>
                </section>

                <section className='options js_collapsable_content hidden'>
                  <h6 className='options__subtitle subtitle'>Colores</h6>
                  <div className='radio'>
                    <div className='option'>
                      <label htmlFor='color'> </label>
                      <input
                        id='color'
                        type='radio'
                        name='color'
                        value='0'
                        className='js_radio js_palettes'
                        defaultChecked
                      />
                      <div className='colors-container'>
                        <div className='colors-container__color dark_green_blue'></div>
                        <div className='colors-container__color dirty_blue'></div>
                        <div className='colors-container__color hospital_green'></div>
                      </div>
                    </div>

                    <div className='option'>
                      <label htmlFor='color'> </label>
                      <input
                        id='color'
                        type='radio'
                        name='color'
                        value='1'
                        className='js_radio js_palettes'
                      />
                      <div className='colors-container'>
                        <div className='colors-container__color dried_blood'></div>
                        <div className='colors-container__color rusty_red'></div>
                        <div className='colors-container__color tomato'></div>
                      </div>
                    </div>

                    <div className='option'>
                      <label htmlFor='color'> </label>
                      <input
                        id='color'
                        type='radio'
                        name='color'
                        value='2'
                        className='js_radio js_palettes'
                      />
                      <div className='colors-container'>
                        <div className='colors-container__color slate'></div>
                        <div className='colors-container__color faded_orange'></div>
                        <div className='colors-container__color light_grey_blue'></div>
                      </div>
                    </div>
                  </div>
                </section>
              </fieldset>

              <fieldset className='fill'>
                <section className='section--title  js_collapsable_title'>
                  <i className='far fa-keyboard icon'></i>
                  <h3 className='title '>Rellena</h3>
                  <i className='fas fa-chevron-down arrow js_arrow'></i>
                </section>

                <section className='js_collapsable_content hidden'>
                  <div className='fill__data'>
                    <label htmlFor='fullName' className='fill__label'>
                      Nombre completo
                      <span className='fill__label--asterisk'>*</span>
                    </label>
                    <input
                      id='fullName'
                      placeholder='Ej: I am Groot!'
                      type='text'
                      name='fullName'
                      className='fill__input js_text_type js_name'
                      required=''
                    />
                    <label htmlFor='job' className='fill__label'>
                      Puesto<span className='fill__label--asterisk'>*</span>
                    </label>

                    <input
                      id='job'
                      placeholder='Ej: I am Groot-developer'
                      type='text'
                      name='job'
                      className='fill__input js_text_type js_job'
                      required=''
                    />
                  </div>

                  <div className='fill__photo'>
                    <label htmlFor='photo' className='fill__label'>
                      Imagen de perfil
                      <span className='fill__label--asterisk'>*</span>
                    </label>

                    <label
                      className='fill__photo--upload-btn'
                      htmlFor='img-selector'
                    >
                      Añadir imagen
                    </label>
                    <input
                      type='file'
                      name=''
                      id='img-selector'
                      className='fill__photo--hiddenField js__profile-upload-btn'
                    />

                    <div className='fill__photo--preview js__profile-preview'></div>
                  </div>

                  <div className='fill__media'>
                    <label htmlFor='emailAddress' className='fill__label'>
                      Email<span className='fill__label--asterisk'>*</span>
                    </label>
                    <input
                      id='emailAddress'
                      placeholder='Ej: iamgroot@gmail.com'
                      type='email'
                      name='emailAddress'
                      className='fill__input js_link_type js_email'
                      required=''
                    />
                    <label htmlFor='phone' className='fill__label'>
                      Teléfono<span className='fill__label--asterisk'>*</span>
                    </label>
                    <input
                      id='phone'
                      placeholder='Ej: 555-55-55-55'
                      type='tel'
                      name='phone'
                      className='fill__input js_link_type js_phone'
                      required=''
                    />
                    <label htmlFor='linkedin' className='fill__label'>
                      Linkedin<span className='fill__label--asterisk'>*</span>
                    </label>
                    <input
                      id='linkedin'
                      placeholder='Ej: linkedin.com/Groot'
                      type='text'
                      name='linkedin'
                      className='fill__input js_link_type js_linkedin'
                      required=''
                    />
                    <label htmlFor='github' className='fill__label'>
                      Github<span className='fill__label--asterisk'>*</span>
                    </label>
                    <input
                      id='github'
                      placeholder='Ej: @Groot!'
                      type='text'
                      name='github'
                      className='fill__input js_link_type js_github'
                      required=''
                    />
                  </div>
                </section>
              </fieldset>

              <fieldset className='share'>
                <section className='section--title  js_collapsable_title'>
                  <i className='fas fa-share-alt icon'></i>
                  <h3 className='title '>Comparte</h3>
                  <i className='fas fa-chevron-down arrow js_arrow'></i>
                </section>

                <section className='js_collapsable_content hidden'>
                  <button className='share--button js_button_create'>
                    <i className='far fa-id-card'></i>
                    <span> Crear tarjeta</span>
                  </button>

                  <section className='creada js-twitter-share'>
                    <h3 className='creada--title'>
                      La tarjeta ha sido creada:
                    </h3>
                    <p className='creada--p js-card-link'></p>
                    {/* <!-- pendiente hacerlo interactivo --> */}
                    <button className='creada--button'>
                      <i className='fab fa-twitter'></i>
                      <span className='span'>Compartir en twitter</span>
                    </button>
                  </section>
                  <div>
                    <p className='js-hidden-box'>
                      Necesita rellenar todos los campos
                    </p>
                  </div>
                </section>
              </fieldset>
            </section>
          </form>
        </main>
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
      </div>
    </div>
  );
}

export default App;
