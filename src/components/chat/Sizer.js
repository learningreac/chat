import ChatBox from "./ChatBox";
import Msgs from "./Msgs";

const Sizer = () => {
    return (
        <div className="spa-chat-sizer">
            <Msgs />
            <ChatBox />
        </div>
    )
};

export default Sizer;