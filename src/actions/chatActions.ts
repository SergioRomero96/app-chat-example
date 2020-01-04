import { Message, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes } from '../types/chatTypes';

export function sendMessage(newMessage: Message): ChatActionTypes {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    };
}

export function deleteMessage(timestamp: number) {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp
        }
    };
}