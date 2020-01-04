import React from 'react';
import { Message } from '../types/chatTypes';

interface IChatHistoryProps {
    messages: Message[];
}

const ChatHistory: React.SFC<IChatHistoryProps> = ({ messages }) => {
    return (
        <div className="columns is-multiline">


            {messages.map((message) => (
                <div className="column is-12" key={message.timestamp}>
                    <div className="card">
                        <div className="card-content">
                            <div className="content">
                                <p className="title is-4">From: {message.user}</p>
                                <p>{message.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatHistory;