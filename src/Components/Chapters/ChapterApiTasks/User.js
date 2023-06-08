import React from 'react';

function User({
	name,
	lastName,
	addressCity,
	addressStreet,
	email,
	registered,
	img,
}) {
	let dateApi = new Date(registered);
	let dayWeek = '';
	let day = dateApi.getDate();
	let month = '';
	let year = dateApi.getFullYear();

	if (dateApi.getDay() === 0) {
		dayWeek = 'Monday';
	} else if (dateApi.getDay() === 1) {
		dayWeek = 'Tuesday';
	} else if (dateApi.getDay() === 2) {
		dayWeek = 'Wednesday';
	} else if (dateApi.getDay() === 3) {
		dayWeek = 'Thursday';
	} else if (dateApi.getDay() === 4) {
		dayWeek = 'Friday';
	} else if (dateApi.getDay() === 5) {
		dayWeek = 'Saturday';
	} else if (dateApi.getDay() === 6) {
		dayWeek = 'Sunday';
	}

	if (dateApi.getMonth() === 0) {
		month = 'January';
	} else if (dateApi.getMonth() === 1) {
		month = 'February';
	} else if (dateApi.getMonth() === 2) {
		month = 'March';
	} else if (dateApi.getMonth() === 3) {
		month = 'April';
	} else if (dateApi.getMonth() === 4) {
		month = 'Mai';
	} else if (dateApi.getMonth() === 5) {
		month = 'Juni';
	} else if (dateApi.getMonth() === 6) {
		month = 'July';
	} else if (dateApi.getMonth() === 7) {
		month = 'August';
	} else if (dateApi.getMonth() === 8) {
		month = 'September';
	} else if (dateApi.getMonth() === 9) {
		month = 'October';
	} else if (dateApi.getMonth() === 10) {
		month = 'November';
	} else if (dateApi.getMonth() === 11) {
		month = 'Desember';
	}
	const styles = {
		position: 'absolute',
		right: 20,
		top: 20,
		backgroundImage: `url(${img})`,
		width: 120,
		height: 120,
		borderRadius: 50,
	};
	return (
		<div className='user'>
			<p>Name: {name}</p>
			<p>Lastname: {lastName}</p>
			<p className='address'>
				Address:
				<span>City: {addressCity}</span>
				<span>Street: {addressStreet}</span>
			</p>
			<p>Email: {email}</p>
			<p>Registration: {`${dayWeek} ${day} ${month} ${year}`} </p>
			<div className='user-img' style={styles}></div>
		</div>
	);
}
export default User;
