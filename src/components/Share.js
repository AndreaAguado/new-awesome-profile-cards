import '../styles/layout/Share.scss';
import { useState } from 'react';
const Share = (props) => {
  const [errorHidden, setErrorHidden] = useState('hidden');
  const [sucessHidden, setSuccessHidden] = useState('hidden');
  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id);
  };
  // let classHidden = 'hidden';
  // const handleShare = (ev) => {
  //   if (props.successTrue.success) {
  //     return (classHidden = '');
  //   } else {
  //     return (classHidden = 'hidden');
  //   }
  // };
  const handleCreate = (ev) => {
    ev.preventDefault();
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      body: JSON.stringify(props.data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === false) {
          props.setError(data.error);
          setErrorHidden('');
          setSuccessHidden('hidden');
          // props.setSuccess('');
        } else if (data.success === true) {
          props.setSuccess(data.cardURL);
          setSuccessHidden('');
          setErrorHidden('hidden');
          // props.setError('')
        }
      });
  };

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
        <button onClick={handleCreate} className='share--button'>
          <i className='far fa-id-card'></i>
          <span> Crear tarjeta</span>
        </button>

        <div>
          <section className={` js-twitter-share ${sucessHidden}`}>
            <h3 className='creada--title'>La tarjeta ha sido creada:</h3>
            <a
              className='creada--p js-card-link'
              href={props.success}
              target='_blank'
              rel='noreferrer'
            >
              Pinche aquí amig@ {props.data.name} !!!!!!!!!
            </a>
            {/* <!-- pendiente hacerlo interactivo --> */}
            <button className='creada--button'>
              <i className='fab fa-twitter'></i>
              <span className='span'>Compartir en twitter</span>
            </button>
          </section>
          <div>
            <p className={`js-hidden-box ${errorHidden}`}>
              Rellene los campos necesarios
            </p>
          </div>
        </div>
      </section>
    </fieldset>
  );
};
export default Share;
