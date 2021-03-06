import { Avatar,IconButton } from "@material-ui/core";
import React, {useState,useEffect} from 'react'
import MoreVert from "@material-ui/icons/MoreVert";
import AttachFile from "@material-ui/icons/AttachFile"
import SearchOutlined  from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./Chat.css";
function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You Types >>> ", input);
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
           
           <div className="chat_headerInfo">
               <h3>Room Name</h3>
               <p>Last Seen at ...</p>
           </div>
           <div className="chat_headerRight">
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <IconButton>
                <AttachFile />   
            </IconButton>
            <IconButton>
                <MoreVert />    
            </IconButton>
           </div>
            </div>
        <div className="chat_body">
           <p className={`chat_message ${true && "chat_reciever"
           }`}>
        <span className="chatName">Abhishek</span>
        he guys
        <span className="chat_timestamp">3:45pm</span>
        </p>
        </div>


        <div className="chat_footer">
           <InsertEmoticonIcon />
           <form>

               <input 
               value={input}
               onChange={(e)=>
                   setInput(e.target.value)}
                    placeholder="Type a Message"
                    type="text" 
                    />

               <button onClick={sendMessage} type="submit">Send a Message</button>
           </form>
           <MicIcon />
           </div>
        </div>
    )
}

export default Chat
