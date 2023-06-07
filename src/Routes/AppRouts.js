import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { News, Articles, Footer, Home, User } from '../Components';
function AppRouts() {
	return (
		<div>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/news' element={<News />} />
				<Route path='/footer' element={<Footer />} />
				<Route path='/user/:userid' element={<User />} />
			</Routes>
		</div>
	);
}
export default AppRouts;
