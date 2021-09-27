import { useState } from 'react';
import '../styles/layout/Share.scss'
const Share = () => {
  const [stateDesign, setStateDesign] = useState('hidden');
  const [stateFill, setStateFill] = useState('hidden');
  const [stateShare, setStateShare] = useState('hidden');

  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');
  const [data, setData] = useState({
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });
  const handleCollapsable = (ev) => {
    const selected = ev.currentTarget;
    console.log(selected);
    if (selected.id === 'collapseDesign') {
      setStateDesign('');
      setStateFill('hidden');
      setStateShare('hidden');
      setArrowDesign('rotateArrowUp');
      setArrowFill('');
      setArrowShare('');
    } else if (selected.id === 'collapseFill') {
      setStateDesign('hidden');
      setStateFill('');
      setStateShare('hidden');
      setArrowDesign('');
      setArrowFill('rotateArrowUp');
      setArrowShare('');
    } else if (selected.id === 'collapseShare') {
      setStateDesign('hidden');
      setStateFill('hidden');
      setStateShare('');
      setArrowDesign('');
      setArrowFill('');
      setArrowShare('rotateArrowUp');
    }
  };
  return (
    <fieldset className='share'>
      <section
        onClick={handleCollapsable}
        id='collapseShare'
        className='section--title'
      >
        <i className='fas fa-share-alt icon'></i>
        <h3 className='title '>Comparte</h3>
        <i className={`fas fa-chevron-down arrow ${arrowShare}`}></i>
      </section>

      <section className={stateShare}>
        <button className='share--button'>
          <i className='far fa-id-card'></i>
          <span> Crear tarjeta</span>
        </button>

        <div className='hidden'>
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
