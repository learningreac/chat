const ChatList= ({friendslist,setChatee}) => {

    return (
        <div className="spa-chat-list">
            <div className="spa-chat-list-box"> 
            {friendslist.map(friend => {
                return (
                    <li className="spa-chat-list-name" key={friend.id} onClick={()=>setChatee(friend.name)}> 
                    {friend.name} 
                    </li>
                )
            })}
            </div>
        </div>
    )
};

export default ChatList;