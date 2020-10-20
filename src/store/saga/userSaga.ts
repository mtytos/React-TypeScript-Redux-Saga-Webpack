import { call, put, takeEvery } from 'redux-saga/effects'
import {AUserFailed, AUserSuccess} from "../user/action";

const apiUrl = `https://jsonplaceholder.typicode.com/users/1`;
function getApi() {
	return fetch(apiUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		}
	})
		.then(res => res.json())
		.catch(err => {throw err})
}

function* fetchUser() {
	try {
		const user = yield call(getApi);
		yield put(AUserSuccess(user));
	} catch (e) {
		yield put(AUserFailed(e.message));
	}
}

function* userSaga() {
	yield takeEvery('GET_USER_REQUESTED', fetchUser);
}

export default userSaga;
