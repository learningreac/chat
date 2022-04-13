import { configMap } from "../constants";
import ChatHeader from "./chat/ChatHeader";
import ChatCloser from './chat/ChatCloser';
import ChatBox from "./chat/ChatBox";
import { useEffect, useRef, useState } from "react";

// window.getComputedStyle(element)
// utility method
const getEmSize = function (elem) {
    return Number(
        getComputedStyle(elem, '').fontSize.match(/\d*\.?\d*/)[0]
    );
};

const computeStateMap = (px_per_em, configMap) => {
    const stateMap = {
        position_type: 'closed',
        slider_hidden_px: 0,
        slider_closed_px: configMap.slider_closed_em * px_per_em,
        slider_opened_px: configMap.slider_opened_em * px_per_em,
        sizer_opened_px: (configMap.slider_opened_em - 2) * px_per_em

    };
    return stateMap;
}

const ChatSlider = ({ isRetracted, height, title, handleClick }) => {
    const sliderRef = useRef();
    const [px_per_em, Set_px_per_em] = useState(0);

    useEffect(() => {
        const slider = sliderRef.current;
        Set_px_per_em(getEmSize(slider));

    }, []);

    let stateMap;
    if(px_per_em) {
       stateMap = computeStateMap(px_per_em, configMap);
    };

    console.log('statemap', stateMap);


    if (isRetracted) {
        title = configMap.retracted_title;
        height = configMap.retracted_height;
    } else {
        title = configMap.extended_title;
        height = configMap.extended_height;
    }

    return (
        <div className="spa-chat" ref={sliderRef}>
            <ChatHeader />
            <ChatCloser />
            <ChatBox />
        </div>
    )
};

export default ChatSlider;

//<div className='spa-shell-chat' title={title} style={{height:height}} onClick={handleClick}> 