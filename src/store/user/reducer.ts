import { UserState, ConfigActionTypes, GET_USER_REQUESTED, GET_USER_SUCCESS, GET_USER_FAILED } from './type';

const initialState: UserState = {
	user: null,
	loading: false,
	error: null
}

export function user(state = initialState, action: ConfigActionTypes): UserState {
	switch (action.type) {
		case GET_USER_REQUESTED:
			return {
				...state,
				loading: true,
			}
		case GET_USER_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.user
			}
		case GET_USER_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			}
		default:
			return state
	}
}
