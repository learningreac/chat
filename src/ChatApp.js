import { useEffect, useState } from 'react';
import './css/spa.css';
import './css/spa.shell.css';
import './css/spa.chat.css';


import ChatSlider from './components/ChatSlider';


import dataService from './services/index';
import axios from 'axios';
const personsUrl = "http://localhost:3001/persons";
const messagesUrl = " http://localhost:3001/messages";

const ChatApp = ({ login_user }) => {

    const [isChatRetracted, setIsChatRetracted] = useState(false); // chatbox
    const [allLoginUserMsgs, setAllMsgs] = useState(null); // initial messages all msg from login user

    const [userData, setUserDate] = useState(null);
    const [friends, setFriends] = useState(null);
    const [chatee, setChatee] = useState({ name: null, id: null }); // name


    useEffect(() => {

        const allUser = dataService
            .getAllUser()
            .then(data => findUserdata(data, login_user))
            .then(result => {
                setUserDate(result);
                setFriends(result.friends);
                setChatee(result.friends[0]);
            });

        console.log('alluser', allUser, 'f', friends);

    }, [login_user]); // render every time when loginUser changes


    useEffect(() => {
        console.log('msgeffect', login_user);
        const allMsgs = dataService
            .getAllMsgs()
            .then(data => findUserMsgs(data, login_user))
            .then(result => {
                setAllMsgs(result);
                console.log('msgeffect', login_user, result)
            })
    }, [login_user]);

    console.log('aftereffect', userData, 'msg', allLoginUserMsgs)

    //utility functions
    function findUserdata(objArr, user_name) {
        const user_data = objArr.find(p => p.name === user_name)
        return user_data;
    };

    let msgsBtwnUsers;
    if (userData && chatee) {
        msgsBtwnUsers = filtbyChatee(allLoginUserMsgs, chatee.id);
    }


    function findUserMsgs(objArr, username) {
        const result = objArr.filter(msg => msg.creatorName === username || msg.recipientName === username);
        return result;
    };

    function filtbyChatee(MsgobjArr, chateeID) {
        const result = MsgobjArr.filter(msg => msg.creatorID === chateeID || msg.recipientID === chateeID);
        result.sort((x, y) => Date.parse(x.timestamp) - Date.parse(y.timestamp));
        console.log("filt&sort", result);
        return result;
    };


    // Event handlers
    const toggleSlider = () => {
        isChatRetracted ?
            setIsChatRetracted(false)
            : setIsChatRetracted(true)
    };

    const createNewMsg = (newMsgobj) => {
        newMsgobj.creatorID = userData.id;
        newMsgobj.creatorName = userData.name;
        newMsgobj.recipientID = chatee.id;
        newMsgobj.recipientName = chatee.name;

        axios
            .post(messagesUrl, newMsgobj)
            .then(response => {
                setAllMsgs(allLoginUserMsgs.concat(response.data))
            })
    };



    return (
        <div>
            {friends && <ChatSlider isRetracted={isChatRetracted}
                handleToggle={toggleSlider}
                friendslist={friends}
                setChatee={setChatee}
                chatee={chatee}
                msgs={msgsBtwnUsers}
                handleSend={createNewMsg}
            />
            }
        </div>
    );
}

export default ChatApp;
