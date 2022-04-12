import { useState } from 'react';
import './css/spa.css';
import './css/spa.shell.css';

import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import ChatSlider from './components/ChatSlider';
import Modal from './components/Modal';

import { configMap } from './constans';

const App = () => {

  const [sliderHeight, setSliderHeight] = useState(configMap.retracted_height)
  const [hoverTitle, setHoverTitle] = useState(configMap.retracted_title);

  const toggleSlider = () => {
    if (sliderHeight === configMap.retracted_height) {
      setSliderHeight(configMap.extended_height);
      setHoverTitle(configMap.extended_title);

    } else if (sliderHeight === configMap.extended_height) {
      setSliderHeight(configMap.retracted_height);
      setHoverTitle(configMap.retracted_title);
    };
  }


  return (
    <div id='spa'>
      <Head />
      <Main />
      <Footer />
      <ChatSlider height={sliderHeight} title={hoverTitle} handleClick={toggleSlider} />
      <Modal />
    </div>
  );
}

export default App;
