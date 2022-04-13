import ChatBox from "./ChatBox";
import Msgs from "./Msgs";

const Sizer = ({sizerheight}) => {
    console.log('sh',sizerheight)
    return (
        <div className="spa-chat-sizer" style={{height:sizerheight}}>
            <Msgs />
            <ChatBox />
        </div>
    )
};

export default Sizer;

