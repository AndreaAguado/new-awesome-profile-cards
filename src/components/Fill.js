import '../styles/layout/Fill.scss';
import ImageReader from './ImageReader';
const Fill = (props) => {
  const handleChange = (ev) => {
    props.handleInput(ev.currentTarget.value, ev.currentTarget.name);
  };
  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id);
  };
  return (
    <fieldset className='fill'>
      <section
        onClick={handleClick}
        id='collapseFill'
        className='section--title'
      >
        <i className='far fa-keyboard icon'></i>
        <h3 className='title '>Rellena</h3>
        <i className={`fas fa-chevron-down arrow ${props.arrowFill}`}></i>
      </section>

      <section className={props.stateFill}>
        <div className='fill__data'>
          <label htmlFor='name' className='fill__label'>
            Nombre completo
            <span className='fill__label--asterisk'>*</span>
          </label>
          <input
            id='name'
            placeholder='Ej: Groot!'
            type='text'
            name='name'
            className='fill__input'
            required=''
            onChange={handleChange}
            value={props.data.name}
          />
          <label htmlFor='job' className='fill__label'>
            Puesto<span className='fill__label--asterisk'>*</span>
          </label>

          <input
            id='job'
            placeholder='Ej: Groot-developer'
            type='text'
            name='job'
            className='fill__input'
            required=''
            onChange={handleChange}
            value={props.data.job}
          />
        </div>

        <div className='fill__photo'>
          <label htmlFor='photo' className='fill__label'>
            Imagen de perfil
            <span className='fill__label--asterisk'>*</span>
          </label>

          <label className='fill__photo--upload-btn' htmlFor='img-selector'>
            <ImageReader handleImage={props.handleImage} />
            Añadir imagen
          </label>
          {/* <input
            type='file'
            name='photo'
            id='img-selector'
            className='fill__photo--hiddenField'
          /> */}

          <div className='fill__photo--preview'></div>
        </div>

        <div className='fill__media'>
          <label htmlFor='email' className='fill__label'>
            Email<span className='fill__label--asterisk'>*</span>
          </label>
          <input
            id='email'
            placeholder='Ej: iamgroot@gmail.com'
            type='email'
            name='email'
            className='fill__input'
            required=''
            onChange={handleChange}
            value={props.data.email}
          />
          <label htmlFor='phone' className='fill__label'>
            Teléfono<span className='fill__label--asterisk'>*</span>
          </label>
          <input
            id='phone'
            placeholder='Ej: 555-55-55-55'
            type='tel'
            name='phone'
            className='fill__input'
            required=''
            onChange={handleChange}
            value={props.data.phone}
          />
          <label htmlFor='linkedin' className='fill__label'>
            Linkedin<span className='fill__label--asterisk'>*</span>
          </label>
          <input
            id='linkedin'
            placeholder='Ej: linkedin.com/Groot'
            type='text'
            name='linkedin'
            className='fill__input'
            required=''
            onChange={handleChange}
            value={props.data.linkedin}
          />
          <label htmlFor='github' className='fill__label'>
            Github<span className='fill__label--asterisk'>*</span>
          </label>
          <input
            id='github'
            placeholder='Ej: @Groot!'
            type='text'
            name='github'
            className='fill__input'
            required=''
            onChange={handleChange}
            value={props.data.github}
          />
        </div>
      </section>
    </fieldset>
  );
};
export default Fill;
