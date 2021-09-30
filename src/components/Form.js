import '../styles/pages/Form.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
const Form = (props) => {
  return (
    <form className='form'>
      <section className='select'>
        <Design
          data={props.data}
          stateDesign={props.stateDesign}
          arrowDesign={props.arrowDesign}
          handleInput={props.handleInput}
          handleCollapsable={props.handleCollapsable}
        />
        <Fill
          data={props.data}
          stateFill={props.stateFill}
          arrowFill={props.arrowFill}
          handleInput={props.handleInput}
          handleCollapsable={props.handleCollapsable}
          handleImage={props.handleImage}
        />
        <Share
          data={props.data}
          stateShare={props.stateShare}
          arrowShare={props.arrowShare}
          handleInput={props.handleInput}
          handleCollapsable={props.handleCollapsable}
        />
      </section>
    </form>
  );
};
export default Form;
