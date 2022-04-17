import { v4 as uuidv4 } from 'uuid';

const ChatBox = ({handleSend}) => {

    const handleSendMsg = (event) => {
        console.log('send btn clicked')
        event.preventDefault();
        const content = event.target.newMsg.value;
        const msgObject = {
            id:uuidv4(),
            content:content,
            timestamp: new Date()
        };

        console.log('new msg', msgObject);
        handleSend(msgObject);

        event.target.newMsg.value = "";
    }
    return (
        <div className="spa-chat-msg-in">
            <form className="spa-chat-msg-form" onSubmit={handleSendMsg}>
                <input type='text' name="newMsg"></input> 
                <button type="submit" className="spa-chat-msg-send">send</button>
            </form>

        </div>
    )
};

export default ChatBox;

// <input type='submit' style={{ display: 'none' }}></input>
//   <div className="spa-chat-msg-send">send</div>
//