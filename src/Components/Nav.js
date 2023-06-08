import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/articles'}>Articles</Link>
				</li>
				<li>
					<Link to={'/news'}>News</Link>
				</li>
				<li>
					<Link to={'/footer'}>Footer</Link>
				</li>
				<li>
					<Link to={'/movies'}>Movies</Link>
				</li>
				<li>
					<Link to={'/chapterApi'}>Komunikacja Z REST API</Link>
				</li>
			</ul>
		</div>
	);
}
export default Nav;
