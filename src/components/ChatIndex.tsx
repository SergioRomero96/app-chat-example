import React, { Component } from 'react';
import { sendMessage } from '../actions/chatActions';
import { updateSession } from '../actions/systemActions';
import { ChatState } from '../types/chatTypes';
import { SystemState } from '../types/systemTypes';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import { thunkSendMessage } from '../services/thunks';
import ChatHistory from './ChatHistory';
import ChatInterface from './ChatInterface';

//Interface del Props del componente
interface IChatIndexProps {
    sendMessage: typeof sendMessage;
    updateSession: typeof updateSession;
    chat: ChatState;
    system: SystemState;
    thunkSendMessage: any;
}

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;

class ChatIndex extends Component<IChatIndexProps> {
    state = {
        message: ""
    };

    componentDidMount() {
        this.props.updateSession({
            loggedIn: true,
            session: "my_session",
            userName: "myName"
        });

        this.props.sendMessage({
            user: "Chat Bot",
            message: "This is very basic chat application written in typescript using react and redux. Feel free to explore the source code",
            timestamp: new Date().getTime()
        });

        //thunkSendMessage
    }

    updateMessage = (event: UpdateMessageParam) => {
        this.setState({
            message: event.currentTarget.value
        });
    };

    sendMessage = (message: string) => {
        this.props.sendMessage({
            user: this.props.system.userName,
            message: message,
            timestamp: new Date().getTime()
        });
        this.setState({
            message: ""
        });
    }

    render() {
        return (
            <div className="chat-index">
                <div className="container is-fluid">
                    <ChatHistory messages={this.props.chat.messages} />
                </div>

                <ChatInterface
                    userName={this.props.system.userName}
                    message={this.state.message}
                    updateMessage={this.updateMessage}
                    sendMessage={this.sendMessage} />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    system: state.system,
    chat: state.chat
});

export default connect(
    mapStateToProps,
    { sendMessage, updateSession, thunkSendMessage }
)(ChatIndex);







