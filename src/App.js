import { useState } from 'react';
import './css/spa.css';
import './css/spa.shell.css';
import './css/spa.chat.css';

import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import ChatSlider from './components/ChatSlider';
import Modal from './components/Modal';


const App = () => {

  const [isChatRetracted, setIsChatRetracted] = useState(true);

  console.log('after click', isChatRetracted)

  const toggleSlider = () => {
    isChatRetracted ?
      setIsChatRetracted(false)
      : setIsChatRetracted(true)
  };


  return (
    <div id='spa'>
      <Head />
      <Main />
      <Footer />
      <ChatSlider isRetracted={isChatRetracted} handleClick={toggleSlider} />
      <Modal />
    </div>
  );
}

export default App;
