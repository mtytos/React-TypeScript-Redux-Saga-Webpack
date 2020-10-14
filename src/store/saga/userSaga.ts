import { call, put, takeEvery } from 'redux-saga/effects'
import {AUsersFailed, AUsersSuccess} from "../user/action";

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function getApi() {
	return fetch(apiUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',

		}
	}).then(response => response.json())
		.catch((error) => {throw error})
}

function* fetchUsers() {
	try {
		const users = yield call(getApi);
		yield put(AUsersSuccess(users));
	} catch (e) {
		yield put(AUsersFailed(e.message));
	}
}

function* userSaga() {
	yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;
