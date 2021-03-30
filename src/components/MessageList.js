import React from 'react'

const DUMMY_DATA = [
    {
        senderId: 'Ancoor  ',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'Mark',
        text: 'Great! How about you?'
    },
    {
        senderId: 'Ancoor',
        text: 'Good to hear! I am great as well'
    }
]

class MessageList extends React.Component {
    render(){
        return(
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                }) }
            </div>
        )
    }
}

export default MessageList