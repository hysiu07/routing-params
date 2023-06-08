import React, { useEffect, useState } from 'react';
import User from './User';

function UsersList() {
	const [usersList, setUserList] = useState([]);
	useEffect(() => {
		fetch('https://randomuser.me/api/?results=10')
			.then((res) => res.json())
			.then((data) => {
				setUserList(data.results);
			});
	}, []);

	return (
		<div>
			{usersList.map((user, index) => {
				return (
					<User
						name={user.name.first ? user.name.first : 'Not found name'}
						lastName={user.name.last ? user.name.last : 'Not found last name'}
						addressCity={user.location.city}
                        addressStreet={user.location.street.name}
                        email={user.email}
                        key={index}
                        registered={user.registered.date}
                        img={user.picture.large}
					/>
				);
			})}
		</div>
	);
}
export default UsersList;
