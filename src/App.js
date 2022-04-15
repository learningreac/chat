import { useState } from 'react';
import './css/spa.css';
import './css/spa.shell.css';
import './css/spa.chat.css';
import { data } from './data';

import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import ChatSlider from './components/ChatSlider';



const App = () => {

  const [isChatRetracted, setIsChatRetracted] = useState(true);
  const [login_user, setLogin_user] = useState('Josh'); //name
  const [chatee, setChatee] = useState({name:null, id:null}); // name
  const [messages, setMessages] = useState(null);
  let login_user_data = data.persons.find(p => p.name === login_user);
  const userId = login_user_data.id;
  let friendslist = login_user_data.friends;

  //let allMsgs = data.messages.map(msg => msg.creatorID === userId)
  //console.log('allmsgs', allMsgs);

 // function filteMsgs (login_user, chatee)


  const toggleSlider = () => {
    isChatRetracted ?
      setIsChatRetracted(false)
      : setIsChatRetracted(true)
  };



  return (
    <div id='spa'>
      <Head login_user={login_user} />
      <Main />
      <ChatSlider isRetracted={isChatRetracted}
        handleToggle={toggleSlider}
        friendslist={friendslist}
        setChatee={setChatee}
        chatee={chatee}
      />
      <Footer />
    </div>
  );
}

export default App;
