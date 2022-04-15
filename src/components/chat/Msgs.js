import ChatBox from "./ChatBox";

const Msgs = ({chatee}) => {
    return (
        <div className="spa-chat-msg">
            <div className="spa-chat-msg-log">
               { chatee.name && <p>{`Now chat with ${chatee.name}`}</p>}
               <p>test lines</p>
            </div>
            <ChatBox />
        </div>
    )
};

export default Msgs;