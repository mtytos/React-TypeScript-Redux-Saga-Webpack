export const GET_USER_REQUESTED = 'GET_USER_REQUESTED';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export type User = {
	address: Address,
	company: Company,
	email: string,
	id: number,
	name: string,
	phone: string,
	username: string,
	website: string,
}

type Address = {
	city: string
	geo: Geo,
	street: string
	suite: string
	zipcode: string
}

type Geo = {
	lat: string
	lng: string
}

type Company = {
	bs: string
	catchPhrase:string
	name: string
}

export type UserState = {
	user: User | null,
	loading: boolean,
	error: string | null,
}

export interface IGetUser {
	type: typeof GET_USER_REQUESTED,
}

export interface IUserSuccess {
	type: typeof GET_USER_SUCCESS,
	user: any
}

export interface IUserFailed {
	type: typeof GET_USER_FAILED,
	message: string
}

export type ConfigActionTypes = IGetUser | IUserSuccess | IUserFailed;
