import '../styles/pages/Form.scss';
import { useState } from 'react';
import Design from './Design';
import Fill from './Fill';
const Form = () => {
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
  //   const handleInput = (ev) => {
  //     const whichInput = ev.currentTarget.name;
  //     if (whichInput === 'name') {
  //       setData({ ...data, name: ev.currentTarget.value });
  //     } else if (whichInput === 'job') {
  //       setData({ ...data, job: ev.currentTarget.value });
  //     } else if (whichInput === 'phone') {
  //       setData({ ...data, phone: ev.currentTarget.value });
  //     } else if (whichInput === 'email') {
  //       setData({ ...data, email: ev.currentTarget.value });
  //     } else if (whichInput === 'linkedin') {
  //       setData({ ...data, linkedin: ev.currentTarget.value });
  //     } else if (whichInput === 'github') {
  //       setData({ ...data, github: ev.currentTarget.value });
  //     }
  //   };
  return (
    <form className='form'>
      <section className='select'>
        <Design />
        <Fill />

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
                <p className='js-hidden-box'>
                  Necesita rellenar todos los campos
                </p>
              </div>
            </div>
          </section>
        </fieldset>
      </section>
    </form>
  );
};
export default Form;
