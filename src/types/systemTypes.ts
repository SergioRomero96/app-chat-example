/**
 * Representa el State del System
 */
export interface SystemState{
    loggedIn: boolean;
    session: string;
    userName: string;
}

export const UPDATE_SESSION = 'UPDATE_SESSION';

//representa el tipo de action para la funcion
interface UpdateSessionAction{
    type: typeof UPDATE_SESSION;
    payload: SystemState;
}

export type SystemActionTypes = UpdateSessionAction