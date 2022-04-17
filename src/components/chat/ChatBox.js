

const ChatBox = ({setMessages}) => {

    const handleSendMsg = (event) => {
        event.preventDefault();
        const content = event.target.newMsg.value;
        const msgObject = {
            content:content,
            creatorID:,
            recipientID:,
            timestamp: new Date()
        }
    }
    return (
        <div className="spa-chat-msg-in">
            <form className="spa-chat-msg-form">
                <input type='text' name="newMsg"></input> 
                <button type="submit" className="spa-chat-msg-send">send</button>
            </form>

        </div>
    )
};

export default ChatBox;

// <input type='submit' style={{ display: 'none' }}></input>
//   <div className="spa-chat-msg-send">send</div>