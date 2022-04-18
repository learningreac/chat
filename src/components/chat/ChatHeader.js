const ChatHeader = ({handleToggle, title, togglesign}) => {
  
    // onClick={handleToggle}
    return(
        <div className="spa-chat-head" onClick={f=>f}>
            <div className="spa-chat-head-toggle" title={title} > {togglesign} </div>
            <div className="spa-chat-head-title"> Chat</div>
        </div>
    )
};

export default ChatHeader;