import Msgs from "./Msgs";
import ChatList from "./ChatList";

const Sizer = ({sizerheight, friendslist,chatee,setChatee}) => {
    console.log('sh',sizerheight)
    return (
        <div className="spa-chat-sizer" style={{height:sizerheight}}>
            <ChatList friendslist={friendslist} setChatee={setChatee}/>
            <Msgs chatee={chatee}/>
        </div>
    )
};

export default Sizer;

