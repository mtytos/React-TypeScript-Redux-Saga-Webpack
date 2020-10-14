import { ConfigActionTypes, GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILED } from './type';

export function AGetUsers (): ConfigActionTypes {
	return {
		type: GET_USERS_REQUESTED
	}
}

export function AUsersSuccess (users: any): ConfigActionTypes {
	return {
		type: GET_USERS_SUCCESS,
		users: users
	}
}

export function AUsersFailed (message: string): ConfigActionTypes {
	return {
		type: GET_USERS_FAILED,
		message: message
	}
}
