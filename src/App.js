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
  const [login_user, setLogin_user] = useState('Josh'); //name
  const [allMsgs, setAllMsgs] = useState(null); // initial messages all msg from login user
  const [chatee, setChatee] = useState({ name: null, id: null }); // name
 
  let login_user_data = data.persons.find(p => p.name === login_user);
  const userID = login_user_data.id;
  let friendslist = login_user_data.friends;

  useEffect(() => {
    console.log('effect');
    axios
      .get(messagesUrl)
     // .then(response => setAllMsgs(response.data));
     .then (response => findUserMsgs(response.data, userID))
     .then (result => console.log('filtedmsg', result))


  },[login_user]);

  console.log('msgafterEffect', allMsgs);

  let msgsBtwnUsers;
  if(userID && chatee.id) {
    msgsBtwnUsers = filtAndSortMsgs(data.messages,userID,chatee.id);
    console.log('msgsbtwn', msgsBtwnUsers);
    //setMessages(msgsBtwnUsers);
  };

function findUserMsgs(objArr, userID) {
  const result = objArr.filter(msg => msg.creatorID===userID || msg.recipientID === userID);
  return result;

}

  function filtAndSortMsgs(objArr, userID, chateeID) {
    const result = [];
    objArr.map(msg => {
      if (msg.creatorID === userID && msg.recipientID === chateeID) {
          return result.push(msg);
      } else if(msg.creatorID === chateeID && msg.recipientID === userID) {
        result.push(msg);
      }
    });
    result.sort((x,y) => Date.parse(x.timestamp) - Date.parse(y.timestamp));
    return result;
  };


// Event handlers

  const toggleSlider = () => {
    isChatRetracted ?
      setIsChatRetracted(false)
      : setIsChatRetracted(true)
  };

  const handleSendMsg = (newMsg) => {
    console.log('sendbtnclicked', allMsgs);
    newMsg.creatorID = userID;
    newMsg.recipientID = chatee.id;
    setAllMsgs([...allMsgs, newMsg])
  };



  return (
    <div id='spa'>
      <Head login_user={login_user} />
      <Main />
      <Modal setUser={setLogin_user}/>
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
