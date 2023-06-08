import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import User from './User';

function UsersList() {
	const [usersList, setUserList] = useState([]);
	useEffect(() => {
		fetch('https://randomuser.me/api/?results=10')
			.then((res) => res.json())
			.then((data) => {
				setUserList(data.results);
			});
		console.log(usersList);
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
                        country={user.location.country}
						key={index}
						registered={user.registered.date}
						img={user.picture.large}
						moreDetails={user.login.uuid}
						positionX={user.location.coordinates.latitude}
						positionY={user.location.coordinates.latitude}
					/>
				);
			})}

			<p>Task 2</p>
			<div className='users-task2'>
				{usersList.map((user, index) => {
					return (
						<Link to={`/chapterApi/:${user.login.uuid}`} key={index}>
							{user.name.first}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
export default UsersList;
