const ChatBox = () => {
    return (
        <div className="spa-chat-msg-in">
            <form className="spa-chat-msg-form">
                <input type='text'></input>
                <input type='submit' style={{ display: 'none' }}></input>
                <div className="spa-chat-msg-send">send</div>
            </form>

        </div>
    )
};

export default ChatBox;