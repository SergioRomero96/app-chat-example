import React from 'react';
import '../assets/styles/App.css';
import { UpdateMessageParam } from './ChatIndex';

interface IChatInterfaceProps {
    message: string;
    userName: string;
    sendMessage: (message: string) => void;
    updateMessage: (event: UpdateMessageParam) => void;
}



const ChatInterface: React.SFC<IChatInterfaceProps> = ({
    userName, message, updateMessage, sendMessage
}) => {

    function keyPress(e: React.KeyboardEvent<any>) {
        if (e.key === "Enter") {
            send();
        }
    }

    function send() {
        sendMessage(message);
    }

    return (
        <div className="margin-chat-interface">
            <div className="chat-interface">
                <div className="card has-background-light">
                    <div className="card-content">
                        <p className="title is-4">UserName: {userName}</p>
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <input className="input" type="text"
                                    value={message}
                                    onChange={updateMessage}
                                    onKeyPress={keyPress} />
                            </div>
                            <div className="control">
                                <button className="button is-success"
                                    onClick={send}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;