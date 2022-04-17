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
  const [messages, setMessages] = useState(null); // initial messages all msg from login user
  const [chatee, setChatee] = useState({ name: null, id: null }); // name
 
  let login_user_data = data.persons.find(p => p.name === login_user);
  const userID = login_user_data.id;
  let friendslist = login_user_data.friends;

  useEffect(() => {
    console.log('effect');
    axios
      .get(messagesUrl)
      .then(response => setMessages(response.data));

      
  },[]);

  console.log('msgafterEffect', messages);

  let msgsBtwnUsers;
  if(userID && chatee.id) {
    msgsBtwnUsers = filtAndSortMsgs(data.messages,userID,chatee.id);
    console.log('msgsbtwn', msgsBtwnUsers);
    //setMessages(msgsBtwnUsers);
  };


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


  const toggleSlider = () => {
    isChatRetracted ?
      setIsChatRetracted(false)
      : setIsChatRetracted(true)
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
        userID={userID}
      />
      <Footer />
    </div>
  );
}

export default App;
