# SPA Chat App With React;
I made this simple Chat app with React. 
It uses react to manage the state and render the UI. 
It can fetch and update user data and message data from a json server.
The app mainly focus on the code logic and modal part, which is simple and clear. right now it does not has much style.

## How to run 

## How I created it
### Step1: Layout
- The Layout is referenced to the book, Single Page Application.
- The example is wrote with jQuery, and here we use React.
![layout](public/imgs/Step1_Layout.png?raw=true "layout")

### Step2: Toggle Chatbox
- The state the for chatbox could be "retracted" or "extended", which show different ui.
- This state is hoisted to the App level, the event handler for click is pass to child component with props. 
![chatbox_toggle](public/imgs/Step2_ToggleChatBox.png?raw=true "chatbox")

### Step3: Add chatlist to Chatbox Component.
- Data modal is created here which contains "persons" and "messages".
- Use the data to render the UI.
![friendslist_message_log](public/imgs/Step3_Combine_friends_with_message_log.png?raw=true "friendslist_message_log")

### Step4: Show Msgs log and enable create new message.
- render messages and update view when user create new message.
- send messages GET and Post request to json server.
![fetchMsgs](public/imgs/Step4_1_Get_msgs_between_users.png?raw=true "testMsgsFetchWithConsole")
![msg_list_create_new](public/imgs/Step5_create_newMsg_and_update_dataServer.png?raw=true "msg_list_create_new")

### Step5: Seperate login form and main chat app.
- Only fetch user data after "islogin" is true.
![login_form](public/imgs/Step4_Seperate_Login_and_chat.png?raw=true "login_form")

### Step6: To do: refine the view.
- Now the basic modal and view of this simple chat app is finished.
- Adding some simple css.
![final_login_page](public/imgs/Step6_Login_page.png?raw=true "final_login_page")
![final_chat_app_page](public/imgs/Step6_Chat_page.png?raw=true "final_chat_app_page")

### To do 
- [x] manipulate data to render messages.
- [x] add json server and use Axios for fetching.
- [ ] right now the data and handlers are pass layers by layers, change to Redux.
- [X] the original example in the book is more like a chat room, change it to a modern style.
- [ ] add routes.
