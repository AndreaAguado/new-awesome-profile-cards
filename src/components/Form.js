import '../styles/pages/Form.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
const Form = (props) => {
  
  return (
    <form className='form'>
      <section className='select'>
        <Design data={props.data} stateDesign={props.stateDesign} arrowDesign={props.arrowDesign} handleInput={props.handleInput} handleCollapsable={props.handleCollapsable}/>
        <Fill />
        <Share />
      </section>
    </form>
  );
};
export default Form;
