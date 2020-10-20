import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { User } from '../store/user/type';
import { AGetUser } from '../store/user/action';
import { CardM } from './Card';

const UserM: FC<{ }> = () => {
	const dispatch = useDispatch();
	const user = useSelector<RootState, User | null>(state => state.user.user);
	const loading = useSelector<RootState, boolean>(state => state.user.loading);
	const error = useSelector<RootState, string | null>(state => state.user.error);

	useEffect(() => {
		dispatch(AGetUser());
	}, [])

	const isNotErrAndLoad = () => {
		return !loading && !error
	}

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && !loading && <p>{error}</p>}
			{isNotErrAndLoad() && user && <CardM key={user.id} user={user} />}
		</>
	)
}

export default UserM;
