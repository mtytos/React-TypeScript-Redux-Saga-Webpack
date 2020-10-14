import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../store";
import { AGetUsers } from '../store/user/action';
import { CardM } from './Card';

const Users = () => {
	const dispatch = useDispatch();
	const user = useSelector<RootState, any>(state => state.users.user);
	const loading = useSelector<RootState, any>(state => state.users.loading);
	const error = useSelector<RootState, any>(state => state.users.error);

	useEffect(() => {
		dispatch(AGetUsers());
	}, [])

	return (
		<>
			{user.loading && <p>Loading...</p>}
			{user.length === 0 && !loading && <p>No users available!</p>}
			{error && !loading && <p>{error}</p>}
			{user.length > 0 && user.map((user1: any) => (
				<CardM key={user1.id} user={user1} />
			))}
		</>
	)
}

export default Users;
