import { useState } from 'react';
import './App.css';

import ChatSlider from './components/ChatSlider'

import { configMap } from './constans';

const App = () => {

  const [sliderHeight, setSliderHeight] = useState(configMap.retracted_height)
  const [hoverTitle, setHoverTitle] = useState(configMap.retracted_title);

  const toggleSlider = () => {
    if(sliderHeight === configMap.retracted_height){
      setSliderHeight(configMap.extended_height);
      setHoverTitle(configMap.extended_title);

    } else if (sliderHeight === configMap.extended_height) {
      setSliderHeight(configMap.retracted_height);
      setHoverTitle(configMap.retracted_title);
    };
  }

  
  return (
    <div id='spa'>
      <ChatSlider height={sliderHeight} title={hoverTitle} handleClick={toggleSlider} />
    </div>
  );
}

export default App;
