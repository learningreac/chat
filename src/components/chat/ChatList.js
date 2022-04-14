const ChatList= ({friendslist}) => {

    return (
        <div className="spa-chat-list">
            <div className="spa-chat-list-box"> 
            {friendslist.map(friend => {
                return (
                    <li className="spa-chat-list-name" key={friend.id}> {friend.name} </li>
                )
            })}
            </div>
        </div>
    )
};

export default ChatList;