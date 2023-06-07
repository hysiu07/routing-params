import React from 'react';
import { Link } from 'react-router-dom';

import './Articles.css';

function Articles() {
	const USERS = [
		{ id: 1, name: 'user 1' },
		{ id: 2, name: 'user 2' },
		{ id: 3, name: 'user 3' },
	];

	return (
		<div>
			{USERS.map((user) => {
				return (
					<Link to={`/user/${user.id}`} key={user.id} className='user'>
						{user.name}
					</Link>
				);
			})}
		</div>
	);
}
export default Articles;
