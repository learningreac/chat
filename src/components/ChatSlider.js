
const ChatSlider = ({ height, title, handleClick }) => {

    return (
        <div className='spa-slider' title={title} style={{height:height}} onClick={handleClick}> </div>
    )
};

export default ChatSlider;