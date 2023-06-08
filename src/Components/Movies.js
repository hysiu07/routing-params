import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import elements from '../movies.json';

function Movies() {
	const [movie, setMovies] = useState([]);

	useEffect(() => {
		setMovies(elements);
	}, []);

	return (
		<div>
			{movie.map((el, index) => {
				return (
					<div>
						<Link to={`/movies/${el.id}`} key={index}>
							{el.title}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
export default Movies;
