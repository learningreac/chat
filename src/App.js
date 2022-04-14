import { useState } from 'react';
import './css/spa.css';
import './css/spa.shell.css';
import './css/spa.chat.css';

import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import ChatSlider from './components/ChatSlider';


const App = () => {

  const [isChatRetracted, setIsChatRetracted] = useState(true);
  const [login_user, setLogin_user] = useState('Josh');
  const [chatee, setChatee] = useState(null);
  const [messages, setMessages]= useState(null);

  console.log('after click', isChatRetracted)

  const toggleSlider = () => {
    isChatRetracted ?
      setIsChatRetracted(false)
      : setIsChatRetracted(true)
  };


  return (
    <div id='spa'>
      <Head login_user={login_user}/>
      <Main />
      <ChatSlider isRetracted={isChatRetracted} handleClick={toggleSlider} />
      <Footer />
    </div>
  );
}

export default App;
