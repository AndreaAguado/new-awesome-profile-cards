import { useState } from 'react';
import '../styles/layout/Design.scss';
const Design = () => {
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
    <fieldset className='desing'>
      <section
        onClick={handleCollapsable}
        id='collapseDesign'
        className='section--title desing__title'
      >
        <i className='far fa-object-ungroup icon'></i>
        <h3 className='title title2'>Diseña</h3>
        <i className={`fas fa-chevron-down arrow ${arrowDesign}`}></i>
      </section>

      <section className={`options ${stateDesign}`}>
        <h6 className='options__subtitle subtitle'>Colores</h6>
        <div className='radio'>
          <div className='option'>
            <label htmlFor='color'> </label>
            <input
              id='color'
              type='radio'
              name='color'
              value='0'
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
            <input id='color' type='radio' name='color' value='1' />
            <div className='colors-container'>
              <div className='colors-container__color dried_blood'></div>
              <div className='colors-container__color rusty_red'></div>
              <div className='colors-container__color tomato'></div>
            </div>
          </div>

          <div className='option'>
            <label htmlFor='color'> </label>
            <input id='color' type='radio' name='color' value='2' />
            <div className='colors-container'>
              <div className='colors-container__color slate'></div>
              <div className='colors-container__color faded_orange'></div>
              <div className='colors-container__color light_grey_blue'></div>
            </div>
          </div>
        </div>
      </section>
    </fieldset>
  );
};
export default Design;
