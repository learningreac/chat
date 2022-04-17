import { configMap } from "../constants";
import ChatHeader from "./chat/ChatHeader";
import ChatCloser from './chat/ChatCloser';
import Sizer from './chat/Sizer';
import { useEffect, useRef, useState } from "react";

// window.getComputedStyle(element)
// utility method
const getEmSize = function (elem) {
  return Number(
    getComputedStyle(elem, '').fontSize.match(/\d*\.?\d*/)[0]
  );
};



const ChatSlider = ({ isRetracted, handleToggle, friendslist,setChatee,chatee,msgs,handleSend }) => {

 // console.log('friendspassed', friendslist);

  const sliderRef = useRef();
  const [px_per_em, Set_px_per_em] = useState(10);

  useEffect(() => {
    const slider = sliderRef.current;
    Set_px_per_em(getEmSize(slider));

  }, []);

  let title, sliderheight, togglesign;
  let stateMap = {
    position_type: 'closed',
    slider_hidden_px: 0,
    slider_closed_px: configMap.slider_closed_em * px_per_em,
    slider_opened_px: configMap.slider_opened_em * px_per_em,
  };
  let sizerheight = (configMap.slider_opened_em - 2) * px_per_em;

  if (isRetracted) {
    title = configMap.slider_closed_title;
    sliderheight = stateMap.slider_closed_px;
    togglesign = '+';
  } else {
    title = configMap.slider_opened_title;
    sliderheight = stateMap.slider_opened_px;
    togglesign = '-';

  }

  return (
    <div className="spa-chat" ref={sliderRef} style={{ height: sliderheight }}>
      <ChatHeader handleToggle={handleToggle} title={title} togglesign={togglesign} />
      <ChatCloser />
      <Sizer sizerheight={sizerheight} friendslist={friendslist} setChatee={setChatee}chatee={chatee} msgs={msgs} handleSend={handleSend}/>
    </div>
  )
};

export default ChatSlider;

//<div className='spa-shell-chat' title={title} style={{height:height}} onClick={handleClick}> 

/**
 * Layout
 * + '<div class="spa-chat">'
          + '<div class="spa-chat-head">'
            + '<div class="spa-chat-head-toggle">+</div>'
            + '<div class="spa-chat-head-title">'
              + 'Chat'
            + '</div>'
          + '</div>'
          + '<div class="spa-chat-closer">x</div>'
          + '<div class="spa-chat-sizer">'
            + '<div class="spa-chat-msgs"></div>'
            + '<div class="spa-chat-box">'
              + '<input type="text"/>'
              + '<div>send</div>'
            + '</div>'
          + '</div>'
        + '</div>',
 */