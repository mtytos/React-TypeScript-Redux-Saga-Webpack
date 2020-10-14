export const GET_USERS_REQUESTED = 'GET_USERS_REQUESTED';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';


export interface IUserState {
	user: any[],
	loading: boolean,
	error: any,
}

export interface IGetUsers {
	type: typeof GET_USERS_REQUESTED,
}

export interface IUsersSuccess {
	type: typeof GET_USERS_SUCCESS,
	users: any
}

export interface IUsersFailed {
	type: typeof GET_USERS_FAILED,
	message: string
}

export type ConfigActionTypes = IGetUsers | IUsersSuccess | IUsersFailed;
