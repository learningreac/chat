const ChatHeader = ({handleToggle, title, togglesign}) => {
  
    return(
        <div className="spa-chat-head" onClick={handleToggle}>
            <div className="spa-chat-head-toggle" title={title} > {togglesign} </div>
            <div className="spa-chat-head-title"> Chat</div>
        </div>
    )
};

export default ChatHeader;