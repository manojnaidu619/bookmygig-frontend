import React from 'react'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5000')

const ChatBox = (props) => {

    const userName = localStorage.getItem('userName')

    const addLi = (data) => {
        const ul = document.querySelector('#chat-ul-div')
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(data))
        ul.appendChild(li)

        const chatWindow = document.querySelector('.chat-text-div'); 
        const xH = chatWindow.scrollHeight; 
        chatWindow.scrollTo(0, xH);
    }

    const addText = (e) => {
        e.preventDefault()
        const msg = document.querySelector('#chat-text').value
        if (msg) {
            socket.emit('chat-text', {room: props.room, msg: msg})
        }
    }

    socket.emit('chat-join', { room: props.room, msg: userName })
    socket.on('add-chat-join', (data) => addLi(data.toUpperCase() + ' Joined now'))  
    socket.on('add-chat-text', (data) => addLi(`${userName.toUpperCase()} says - ${data}`))


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
        height: '250px'
    },
    chatDivUl: {
        listStyle: 'none',
        padding: '0',
        marginLeft: '5px',
        marginTop: '5px'
    },
    chatText: {
        border: '1px solid #ccc',
        height: '100%',
        overflowY: 'auto'
    }
}

export default ChatBox