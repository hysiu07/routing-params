import React from 'react';
import { useParams } from 'react-router-dom';
function User() {
	const params = useParams();
	console.log(params);

	return <div>User id is {params.userid} </div>;
}
export default User;
