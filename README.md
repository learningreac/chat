# SPA Chat App With React;



## Step1: Layout
- The Layout is referenced to the book, Single Page Application.
- The example is wrote with jQuery, and here we use React.
![layout](public/imgs/Step1_Layout.png?raw=true "layout")

## Step2: Toggle Chatbox
- The state the for chatbox could be "retracted" or "extended", which show different ui.
- This state is hoisted to the App level, the event handler for click is pass to child component with props. 
![chatbox_toggle](public/imgs/Step2_ToggleChatBox.png?raw=true "chatbox")

## Step3: Add chatlist to Chatbox Component.
- Data modal is created here which contains "persons" and "messages".
- Use the data to render the UI.
![friendslist_message_log](public/imgs/Step3_Combine_friends_with_message_log.png?raw=true "friendslist_message_log")

### To do 
- [ ] manipulate data to render messages.
- [ ] add json server and backend service
- [ ] right now the data and handlers are pass layers by layers, better to use Redux.
- [ ] the original example in the book is more like a chat room, I want to change it to a Wechat style.
