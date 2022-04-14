import ChatBox from "./ChatBox";

const Msgs = ({chatee}) => {
    return (
        <div className="spa-chat-msg">
            <div className="spa-chat-msg-log">
                <p>{`Now chat with ${chatee}`}</p>
            </div>
            <ChatBox />
        </div>
    )
};

export default Msgs;