const Preview =(props) => { 
    return(
        <section className='card__first__view'>
        <div className='card__result'>
          <button className='button__reset'>
            <i className='far fa-trash-alt'></i> reset
          </button>

          <div className={`card__example palette_${props.data.palette}`}>
            <div className='text__section color_line'>
              <h3 className='name__card color_text'>
                {props.data.name === '' ? 'groot!' : props.data.name}
              </h3>
              <h4 className='job__name color_job'>
                {props.data.job === '' ? 'groot developer' : props.data.job}
              </h4>
            </div>

            <div className='photo__example'>
              <div
                alt='yourlogo'
                title='yourlogo'
                className='photo__example--logo profile__image'
              ></div>
            </div>

            <div className='link__section'>
              <a
                className='circle__awesome color_circle'
                href={'tel:' + props.data.phone}
                target='_blank'
                rel='noreferrer'
              >
                <i className='fas fa-mobile-alt'></i>
              </a>

              <a
                className='circle__awesome color_circle'
                href={'mailto:' + props.data.email}
                target='_blank'
                rel='noreferrer'
              >
                <i className='far fa-envelope'></i>
              </a>

              <a
                className='circle__awesome color_circle'
                href={'https://www.linkedin.com/in/' + props.data.linkedin}
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>

              <a
                className='circle__awesome color_circle'
                href={'https://github.com/' + props.data.github}
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-github-alt'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Preview;