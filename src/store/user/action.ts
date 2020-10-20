import { ConfigActionTypes, GET_USER_REQUESTED, GET_USER_SUCCESS, GET_USER_FAILED } from './type';

export function AGetUser (): ConfigActionTypes {
	return {
		type: GET_USER_REQUESTED
	}
}

export function AUserSuccess (user: any): ConfigActionTypes {
	return {
		type: GET_USER_SUCCESS,
		user: user
	}
}

export function AUserFailed (message: string): ConfigActionTypes {
	return {
		type: GET_USER_FAILED,
		message: message
	}
}
