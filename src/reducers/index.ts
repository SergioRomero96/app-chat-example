import { combineReducers } from 'redux';

import { chatReducer } from './chatReducer';
import { systemReducer } from './systemReducer';

export const rootReducer = combineReducers({
    system: systemReducer,
    chat: chatReducer
});

//retorna el tipo de una funcion
export type AppState = ReturnType<typeof rootReducer>;