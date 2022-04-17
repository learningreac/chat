import ChatBox from "./ChatBox";

const Msgs = ({ chatee, msgs, userID }) => {
    let msgsToShow;
    return (
        <div className="spa-chat-msg">
            <div className="spa-chat-msg-log">
                {chatee.name && <p>{`Now chat with ${chatee.name}`}</p>}
                {msgs && msgs.map(obj => <p key={obj.msgID}>{obj.content}</p>)}
            </div>
            <ChatBox />
        </div>
    )
};

export default Msgs;