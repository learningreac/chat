import axios from "axios";
const personsUrl = "http://localhost:3001/persons";
const messagesUrl = " http://localhost:3001/messages";

const getAllUser = async () => {
    return await axios.get(personsUrl)
                      .then(response => response.data);
}

const getAllMsgs = async () => {
    //const request = await axios.get(messagesUrl);
    //return request.then(response => response.data);
    return await axios.get(messagesUrl)
                      .then(response => response.data)
};

const createMsg = async (newObject) => {
    const request = axios.post(messagesUrl, newObject);
    return request.then(response => response.data);
}

export default { getAllUser, getAllMsgs, createMsg };