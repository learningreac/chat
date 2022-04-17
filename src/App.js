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
  const [loginUser, setLoginUser] = useState('Josh'); //user input username
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

  }, [loginUser]); // render if loginUser changes



  useEffect(() => {
    // console.log('msgeffect',loginUser);

    axios
      .get(messagesUrl)
      // .then(response => setAllMsgs(response.data));
      .then(response => findUserMsgs(response.data, loginUser))
      .then(result => {
        setAllMsgs(result);
        //  console.log(loginUser,result,'msgeffect')
      })

  }, [loginUser]);

  console.log('aftereffect', userData, 'msg', allLoginUserMsgs)


  function findUserdata(objArr, user_name) {
    const user_data = objArr.find(p => p.name === user_name)
    return user_data;
  };



  const login_user_data = data.persons.find(p => p.name === loginUser);
  const userid = login_user_data.id;
  let friendslist = login_user_data.friends;
  let msgsBtwnUsers;
  if (userid && chatee.id) {
    msgsBtwnUsers = filtAndSortMsgs(data.messages, userData.id, chatee.id);
  }


  function findUserMsgs(objArr, username) {  // !!!!!!!!!!!! should be username 

    const result = objArr.filter(msg => msg.creatorName === username || msg.recipientName === username);
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

  const createNewMsg = (newMsgobj) => {
    //console.log('sendbtnclicked', allLoginUserMsgs);
    newMsgobj.creatorID = userData.id;
    newMsgobj.creatorName = userData.name;
    newMsgobj.recipientID = chatee.id;
    newMsgobj.recipientName = chatee.name;

    axios
      .post(messagesUrl,newMsgobj)
      .then(response => {
        setAllMsgs(allLoginUserMsgs.concat(response.data))
       // console.log('post',response)
      })
    //setAllMsgs([...allLoginUserMsgs, newMsgobj])
  };



  return (
    <div id='spa'>
      <Modal is_Login={islogin} set_Is_Longin={setIsLongin} set_User={setLoginUser} />
      <Head is_Login={islogin} login_user={loginUser} />
      <Main />
      {islogin && <ChatSlider isRetracted={isChatRetracted}
        handleToggle={toggleSlider}
        friendslist={friendslist}
        setChatee={setChatee}
        chatee={chatee}
        msgs={msgsBtwnUsers}
        handleSend={createNewMsg}
      />}
      <Footer />
    </div>
  );
}

export default App;
