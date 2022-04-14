import Msgs from "./Msgs";
import ChatList from "./ChatList";

const Sizer = ({sizerheight}) => {
    console.log('sh',sizerheight)
    return (
        <div className="spa-chat-sizer" style={{height:sizerheight}}>
            <ChatList />
            <Msgs />
        </div>
    )
};

export default Sizer;

