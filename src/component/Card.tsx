import React, { FC } from 'react';
import { User } from '../store/user/type';

export const CardM: FC<{user: User}> = ({ user }) => {
	return (
		<div>
			<h5>{user.name}</h5>
			<h6>{user.phone}</h6>
			<p>{user.email}</p>
			<hr/>
		</div>
	);
}
