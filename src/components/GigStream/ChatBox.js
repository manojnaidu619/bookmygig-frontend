import React from 'react'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5000')

const ChatBox = (props) => {
 
    const userName = localStorage.getItem('userName')

    const addLi = (data, typed) => {
        const ul = document.querySelector('#chat-ul-div')
        const lastUlData = ul.lastChild 
        if ( lastUlData === null || lastUlData.textContent !== data) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(data))
            ul.appendChild(li)

            const chatWindow = document.querySelector('.chat-text-div'); 
            const xH = chatWindow.scrollHeight; 
            chatWindow.scrollTo(0, xH);
        }
    }

    const addText = (e) => {
        e.preventDefault()
        const textBox = document.querySelector('#chat-text')
        const msg = textBox.value
        if (msg) {
            socket.emit('chat-text', {room: props.room, msg: msg, user: userName})
        }
        textBox.value = ""
    }

    socket.emit('chat-join', { room: props.room, msg: userName })
    socket.on('add-chat-join', (data) => addLi(data.toUpperCase() + ' Joined now', false))  
    socket.on('add-chat-text', ({msg, user}) => addLi(`${user.toUpperCase()} says - ${msg}`, true))
    socket.on("chat-disconnected", (data) => addLi(userName + data))


    return (
        <div className="chat-div" style={styles.chatDiv}>
            <div className="chat-text-div" style={styles.chatText}>
                <ul id="chat-ul-div" style={styles.chatDivUl}></ul>
            </div>
            <div className="chat-div-input">
                <div className="input-group mb-3">
                    <input type="text" id="chat-text" className="form-control" placeholder="type something"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={addText}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    chatDiv: {
        width: '275px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '350px',
        position: 'absolute',
        right: '25px',
        top: '30%'
    },
    chatDivUl: {
        listStyle: 'none',
        padding: '10px'
    },
    chatText: {
        border: '1px solid #ccc',
        height: '100%',
        overflowY: 'auto'
    }
}

export default ChatBox