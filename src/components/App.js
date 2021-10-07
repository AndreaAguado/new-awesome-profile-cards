import '../styles/App.scss';

import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Preview from './Preview';

import callToApi from '../services/callToApi';

function App() {
  const [stateDesign, setStateDesign] = useState('');
  const [stateFill, setStateFill] = useState('hidden');
  const [stateShare, setStateShare] = useState('hidden');

  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');
  const [data, setData] = useState({
    palette: '0',
    name: '',
    job: '',
    photo: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });

  useEffect(() => {
    callToApi(data).then(response => {
      console.log(response);

    })
  }, [data])


  const handleCollapsable = (id) => {
    const selected = id;
    console.log(selected);
    if (selected === 'collapseDesign') {
      setStateDesign('');
      setStateFill('hidden');
      setStateShare('hidden');
      setArrowDesign('rotateArrowUp');
      setArrowFill('');
      setArrowShare('');
    } else if (selected === 'collapseFill') {
      setStateDesign('hidden');
      setStateFill('');
      setStateShare('hidden');
      setArrowDesign('');
      setArrowFill('rotateArrowUp');
      setArrowShare('');
    } else if (selected === 'collapseShare') {
      setStateDesign('hidden');
      setStateFill('hidden');
      setStateShare('');
      setArrowDesign('');
      setArrowFill('');
      setArrowShare('rotateArrowUp');
    }
  };
  const handleInput = (value, name) => {
    const whichInput = name;
    if (whichInput === 'palette') {
      setData({ ...data, palette: value });
    } else if (whichInput === 'name') {
      setData({ ...data, name: value });
    } else if (whichInput === 'job') {
      setData({ ...data, job: value });
    } else if (whichInput === 'phone') {
      setData({ ...data, phone: value });
    } else if (whichInput === 'email') {
      setData({ ...data, email: value });
    } else if (whichInput === 'linkedin') {
      setData({ ...data, linkedin: value });
    } else if (whichInput === 'github') {
      setData({ ...data, github: value });
    }
  };

  const handleImage = (file) => {
    setData({ ...data, photo: file });
    console.log('img', file);
  };
  console.log(data);

  const handleReset = () => {
    setData({
      palette: '0',
      name: '',
      job: '',
      photo: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
    })
  }
  return (
    <div>
      <div className='page_interactive'>
        <Header />
        <main className='main_interactive'>
          <Preview data={data} handleReset={handleReset} />
          <Form
            data={data}
            stateDesign={stateDesign}
            arrowDesign={arrowDesign}
            stateFill={stateFill}
            arrowFill={arrowFill}
            stateShare={stateShare}
            arrowShare={arrowShare}
            handleInput={handleInput}
            handleCollapsable={handleCollapsable}
            handleImage={handleImage}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
