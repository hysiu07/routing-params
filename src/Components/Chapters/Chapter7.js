import React from 'react';
import FancyBorder from './FancyBorder';

function SpitPane(props) {
	return (
		<div>
			<div>{props.up}</div>
			<div>{props.bottom}</div>
		</div>
	);
}

function Chapter7() {
	return (
		<div>
			<FancyBorder color={'red'}>
				<h1>Hello You!</h1>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eius?
				</h2>
				<SpitPane
					up={
						<FancyBorder color={'blue'}>
							<p>HELLO!</p>
						</FancyBorder>
					}
					bottom={'sd'}
				/>
			</FancyBorder>
		</div>
	);
}
export default Chapter7;
