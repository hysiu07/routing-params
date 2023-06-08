import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { News, Articles, Footer, Home, User, Movies, Movie } from '../Components';
import { ChapterApi } from '../Components/Chapters';
function AppRouts() {
	return (
		<div>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/news' element={<News />} />
				<Route path='/footer' element={<Footer />} />
				<Route path='/user/:userid' element={<User />} />
				<Route path='/movies/:movieId' element={<Movie />} />
				<Route path='/movies' element={<Movies />} />
				<Route path='/chapterApi' element={<ChapterApi/>} />
			</Routes>
		</div>
	);
}
export default AppRouts;
