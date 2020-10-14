import { IUserState, ConfigActionTypes, GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILED } from './type';

const initialState: IUserState = {
	user: [],
	loading: false,
	error: null
}

export function users(state = initialState, action: ConfigActionTypes): IUserState {
	switch (action.type) {
		case GET_USERS_REQUESTED:
			return {
				...state,
				loading: true,
			}
		case GET_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.users
			}
		case GET_USERS_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			}
		default:
			return state
	}
}
