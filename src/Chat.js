import React,{ useState } from 'react';
import './Chat.css';
import MicIcon from '@material-ui/icons/Mic';
import { IconButton } from '@material-ui/core';

function Chat() {
    const[input,setInput] = useState('');
    const sendMessage = (e) =>{
        e.preventDefault();
        //firebase and redux...
        setInput('');
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To:<span className="chat__name">Channel name</span></h4>
                <strong>details</strong>
                
            </div>
            <div className="chat__messages">
                iam message
                iam message
            </div>
            <div className="chat__input">
                <form>
                    <input type="text" placeholder="Send Message"
                     value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <button type="submit" onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                <MicIcon className="chat__mic"/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
