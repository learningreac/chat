import { useEffect, useState } from 'react';
import './css/spa.css';
import './css/spa.shell.css';
import './css/spa.chat.css';
import { data } from './data';

import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import ChatSlider from './components/ChatSlider';
import Modal from './components/Modal';

// import dataService from './services/index';
import axios from 'axios';
const personsUrl = "http://localhost:3001/persons";
const messagesUrl = " http://localhost:3001/messages";

const App = () => {
  const [islogin, setIsLongin] = useState(false);
  const [isChatRetracted, setIsChatRetracted] = useState(false); // chatbox
  const [loginUser, setLoginUser] = useState(null); //user input username
  const [allLoginUserMsgs, setAllMsgs] = useState(null); // initial messages all msg from login user

  const [userData, setUserDate] = useState(null);
  const [friends, setFriends] = useState(null);
  const [chatee, setChatee] = useState({ name: null, id: null }); // name


  useEffect(() => {
    // console.log('personeffect');

    axios
      .get(personsUrl)
      .then(response => findUserdata(response.data, loginUser))
      .then(result => {
        setUserDate(result);
        setFriends(result.friends);
        setChatee(result.friends[0]);
      });

  }, [loginUser]); // render every time when loginUser changes


  useEffect(() => {
    console.log('msgeffect', loginUser);

    axios
      .get(messagesUrl)
      // .then(response => setAllMsgs(response.data));
      .then(response => findUserMsgs(response.data, loginUser))
      .then(result => {
        setAllMsgs(result);
        console.log('msgeffect',loginUser, result )
      })

  }, [loginUser]);

  console.log('aftereffect', userData, 'msg', allLoginUserMsgs)


  function findUserdata(objArr, user_name) {
    const user_data = objArr.find(p => p.name === user_name)
    return user_data;
  };

  let msgsBtwnUsers;
  if (userData && chatee) {
    msgsBtwnUsers = filtbyChatee(allLoginUserMsgs, chatee.id);
  }


  function findUserMsgs(objArr, username) {  // !!!!!!!!!!!! should be username 
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
    //console.log('sendbtnclicked', allLoginUserMsgs);
    newMsgobj.creatorID = userData.id;
    newMsgobj.creatorName = userData.name;
    newMsgobj.recipientID = chatee.id;
    newMsgobj.recipientName = chatee.name;

    axios
      .post(messagesUrl, newMsgobj)
      .then(response => {
        setAllMsgs(allLoginUserMsgs.concat(response.data))
      })
    //setAllMsgs([...allLoginUserMsgs, newMsgobj])
  };



  return (
    <div id='spa'>
      <Modal is_Login={islogin} set_Is_Longin={setIsLongin} set_User={setLoginUser} />
      <Head is_Login={islogin} login_user={loginUser} />
      <Main />
      {/*islogin && <ChatSlider isRetracted={isChatRetracted}
        handleToggle={toggleSlider}
        friendslist={friends}
        setChatee={setChatee}
        chatee={chatee}
        msgs={msgsBtwnUsers}
        handleSend={createNewMsg}
  />*/}
      <Footer />
    </div>
  );
}

export default App;
