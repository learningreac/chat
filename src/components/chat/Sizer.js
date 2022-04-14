import Msgs from "./Msgs";
import ChatList from "./ChatList";

const Sizer = ({sizerheight, friendslist}) => {
    console.log('sh',sizerheight)
    return (
        <div className="spa-chat-sizer" style={{height:sizerheight}}>
            <ChatList friendslist={friendslist}/>
            <Msgs />
        </div>
    )
};

export default Sizer;

