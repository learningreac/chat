import ChatBox from "./ChatBox";

const Msgs = ({ msgs, handleSend}) => {
    return (
        <div className="spa-chat-msg">
            <div className="spa-chat-msg-log"> 
                {msgs && msgs.map(obj => <p key={obj.id}>{`${obj.creatorName}: ${obj.content}`}</p>)}
            </div>
            <ChatBox handleSend={handleSend}/>
        </div>
    )
};

export default Msgs;

// {chatee.name && <p>{`Now chat with ${chatee.name}`}</p>}