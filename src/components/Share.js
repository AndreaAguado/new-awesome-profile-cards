import '../styles/layout/Share.scss'
const Share = (props) => {

  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id)
  }
  let classHidden;
  const handleShare = (ev) => {
    if (props.successTrue.success) {
      return classHidden = '';
    }
    else {
      return classHidden = 'hidden';
    }
  }
  return (
    <fieldset className='share'>
      <section
        onClick={handleClick}
        id='collapseShare'
        className='section--title'
      >
        <i className='fas fa-share-alt icon'></i>
        <h3 className='title '>Comparte</h3>
        <i className={`fas fa-chevron-down arrow ${props.arrowShare}`}></i>
      </section>

      <section className={props.stateShare}>
        <button onClick={handleShare} className='share--button'>
          <i className='far fa-id-card'></i>
          <span> Crear tarjeta</span>
        </button>

        <div className={classHidden}>
          <section className='creada js-twitter-share'>
            <h3 className='creada--title'>La tarjeta ha sido creada:</h3>
            <p className='creada--p js-card-link'></p>
            {/* <!-- pendiente hacerlo interactivo --> */}
            <button className='creada--button'>
              <i className='fab fa-twitter'></i>
              <span className='span'>Compartir en twitter</span>
            </button>
          </section>
          <div>
            <p className='js-hidden-box'>Necesita rellenar todos los campos</p>
          </div>
        </div>
      </section>
    </fieldset>
  );
};
export default Share;
