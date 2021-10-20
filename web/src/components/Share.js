import '../styles/layout/Share.scss';
import { useState } from 'react';
const Share = (props) => {
  const [errorHidden, setErrorHidden] = useState('hidden');
  const [sucessHidden, setSuccessHidden] = useState('hidden');
  const [twitter, setTwitter] = useState('');

  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id);
  };
  const handleCreate = (ev) => {
    ev.preventDefault();
    fetch('/card', {
      method: 'POST',
      body: JSON.stringify(props.data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((fetchResponse) => {
        console.log(fetchResponse);
        setTwitter(fetchResponse.cardURL);
        if (fetchResponse.success === false) {
          props.setError(fetchResponse.error);
          setErrorHidden('');
          setSuccessHidden('hidden');
          // props.setSuccess('');
        } else if (fetchResponse.success === true) {
          props.setSuccess(fetchResponse.cardURL);
          setTwitter(fetchResponse.cardURL);
          setSuccessHidden('');
          setErrorHidden('hidden');
          // props.setError('')
        }
      });
  };
  const handleTwitter = (ev) => {
    ev.preventDefault();
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
            <div className='divClass'>
              <a
                className='linkTwitter'
                target='blank'
                href={`https://twitter.com/intent/tweet?text= Mi tarjeta profesional 👩🏻‍💻 ¡Contáctame! 💌 &url=${props.success}`}
                // href={`https:twitter.com/intent/tweet?url=${props.success}`}
              >
                <i className='fab fa-twitter'></i>
                <span className='span'>Compartir en twitter</span>{' '}
              </a>
            </div>
          </section>
          <div>
            <p className={`js-hidden-box ${errorHidden}`}>{props.error}</p>
          </div>
        </div>
      </section>
    </fieldset>
  );
};
export default Share;
