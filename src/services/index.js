import axios from "axios";
const personsUrl = "http://localhost:3001/persons";
const messagesUrl = " http://localhost:3001/messages";

const getLoginUserData = async () => {
    const request = await axios.get(personsUrl);
    return request.then(response => response.data);
}

const getloginUserMsgs = async () => {
    const response = axios.get(messagesUrl)
};

export default { getLoginUserData }