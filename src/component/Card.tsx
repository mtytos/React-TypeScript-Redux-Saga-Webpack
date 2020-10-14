import React from 'react'

export const CardM = (props: any) => {
	return (
		<div>
			<h5>{props.user.name}</h5>
			<h6>{props.user.company.name}</h6>
			<p>{props.user.company.catchPhrase}</p>
			<hr/>
		</div>
	);
}
