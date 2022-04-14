const ChatBox = () => {
    return (
        <div className="spa-chat-box">
            <input type='text'></input>
            <input type='submit' style={{display:'none'}}></input>
            <div className="spa-chat-msg-send">send</div>
        </div>
    )
};

export default ChatBox;