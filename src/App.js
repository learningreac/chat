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

  const [isChatRetracted, setIsChatRetracted] = useState(true); // chatbox
  const [loginUser, setLoginUser] = useState('Josh'); //name
  const [allLoginUserMsgs, setAllMsgs] = useState(null); // initial messages all msg from login user

  const [userData, setUserDate] = useState(null);

  const [chatee, setChatee] = useState({ name: null, id: null }); // name

  const login_user_data = data.persons.find(p => p.name === loginUser);
  const userID = login_user_data.id;
  let friendslist = login_user_data.friends;

  useEffect(() => {
    //console.log('msgeffect');
    axios
      .get(messagesUrl)
      // .then(response => setAllMsgs(response.data));
      .then(response => findUserMsgs(response.data, userID))
      .then(result => setAllMsgs(result))

  }, [loginUser]);

  useEffect(() => {
    console.log('personeffect');
    axios
      .get(personsUrl)
      .then(response => findUserdata(response.data, loginUser))
      .then(result => setUserDate(result));

  }, [loginUser]); // render if loginUser changes

  console.log('finduseraftereffect', userData)

  function findUserdata (objArr, user_name) {
    console.log('user_name', user_name)
    const user_data = objArr.find(p => p.name === user_name)
    return user_data;

  };

  //setUserDate(response.data.find(p => p.name === loginUser))
  //console.log('affeffect msgs', allLoginUserMsgs);
  // .then(result =>)

  let msgsBtwnUsers;
  if (userID && chatee.id) {
    msgsBtwnUsers = filtAndSortMsgs(data.messages, userID, chatee.id);
    console.log('msgsbtwn', msgsBtwnUsers);
    //setMessages(msgsBtwnUsers);
  };

  function findUserMsgs(objArr, userID) {
    const result = objArr.filter(msg => msg.creatorID === userID || msg.recipientID === userID);
    return result;

  }

  function filtAndSortMsgs(objArr, userID, chateeID) {
    const result = [];
    objArr.map(msg => {
      if (msg.creatorID === userID && msg.recipientID === chateeID) {
        return result.push(msg);
      } else if (msg.creatorID === chateeID && msg.recipientID === userID) {
        result.push(msg);
      }
    });
    result.sort((x, y) => Date.parse(x.timestamp) - Date.parse(y.timestamp));
    return result;
  };


  // Event handlers

  const toggleSlider = () => {
    isChatRetracted ?
      setIsChatRetracted(false)
      : setIsChatRetracted(true)
  };

  const handleSendMsg = (newMsg) => {
    console.log('sendbtnclicked', allLoginUserMsgs);
    newMsg.creatorID = userID;
    newMsg.recipientID = chatee.id;
    setAllMsgs([...allLoginUserMsgs, newMsg])
  };



  return (
    <div id='spa'>
      <Head login_user={loginUser} />
      <Main />
      <Modal setUser={setLoginUser} />
      <ChatSlider isRetracted={isChatRetracted}
        handleToggle={toggleSlider}
        friendslist={friendslist}
        setChatee={setChatee}
        chatee={chatee}
        msgs={msgsBtwnUsers}
        handleSend={handleSendMsg}
      />
      <Footer />
    </div>
  );
}

export default App;
