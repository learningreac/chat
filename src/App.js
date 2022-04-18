import { useState } from 'react';
import './css/spa.css';
import './css/spa.shell.css';
import './css/spa.chat.css';

import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ChatApp from './ChatApp';

const App = () => {
  const [islogin, setIsLongin] = useState(false);
  const [loginUser, setLoginUser] = useState(null); //user input username
 
// <Main />

  return (
    <div id='spa'>
      <Modal is_Login={islogin} set_Is_Longin={setIsLongin} set_User={setLoginUser} />
      <Head is_Login={islogin} login_user={loginUser} />
      <Main />
     {loginUser && <ChatApp login_user={loginUser}/>}
      <Footer />
    </div>
  );
}

export default App;
