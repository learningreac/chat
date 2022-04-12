import { configMap } from "../constants";

const ChatSlider = ({ isRetracted, height, title, handleClick }) => {

    if(isRetracted) {
        title = configMap.retracted_title;
        height = configMap.retracted_height; 
    } else {
        title = configMap.extended_title;
        height = configMap.extended_height;
    }

    return (
        <div className='spa-shell-chat' title={title} style={{height:height}} onClick={handleClick}> </div>
    )
};

export default ChatSlider;