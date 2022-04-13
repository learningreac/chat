const ChatHeader = ({handleToggle, title}) => {
    return(
        <div className="spa-chat-head">
            <div className="spa-chat-head-toggle" title={title} onClick={handleToggle}> + </div>
            <div className="spa-chat-head-title"> Chat</div>
        </div>
    )
};

export default ChatHeader;