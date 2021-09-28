import '../styles/layout/Design.scss';
const Design = (props) => {

  const handleChange =(ev) => {
    props.handleInput(ev.target.checked);
  }
  const handleClick = (ev) => {
    props.handleCollapsable(ev.target.id)
  }
  return (
    <fieldset className='desing'>
      <section
        onClick={handleClick}
        id='collapseDesign'
        className='section--title desing__title'
      >
        <i className='far fa-object-ungroup icon'></i>
        <h3 className='title title2'>Diseña</h3>
        <i className={`fas fa-chevron-down arrow ${props.arrowDesign}`}></i>
      </section>

      <section className={`options ${props.stateDesign}`}>
        <h6 className='options__subtitle subtitle'>Colores</h6>
        <div className='radio'>
          <div className='option'>
            <label htmlFor='color'> </label>
            <input 
            onChange={handleChange}
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
            <input onChange={handleChange} id='color' type='radio' name='color' value='1' />
            <div className='colors-container'>
              <div className='colors-container__color dried_blood'></div>
              <div className='colors-container__color rusty_red'></div>
              <div className='colors-container__color tomato'></div>
            </div>
          </div>

          <div className='option'>
            <label htmlFor='color'> </label>
            <input onChange={handleChange} id='color' type='radio' name='color' value='2' />
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
