import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { News, Articles, Footer, Home, Movies, Movie } from '../Components';
import { User } from '../Components/Chapters/ChapterApiTasks';
import { ChapterApi } from '../Components/Chapters';
function AppRouts() {
	return (
		<div>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/news' element={<News />} />
				<Route path='/footer' element={<Footer />} />
				{/* <Route path='/user/:userid' element={<User />} /> */}
				<Route path='/movies/:movieId' element={<Movie />} />
				<Route path='/movies' element={<Movies />} />
				<Route path='/chapterApi' exact element={<ChapterApi />} />
				<Route path='/chapterApi/:userId' element={<User name={'Daniel'} />} />
			</Routes>
		</div>
	);
}
export default AppRouts;
