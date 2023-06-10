import React, { Component } from 'react';

const theme = {
	buttonColor: 'blue',
	isAuthenticated: false,
};

const MyContext = React.createContext();

function ThemeButton() {
	return (
		<MyContext.Consumer>
			{(value) => (
				<button style={{ color: value.buttonColor }}>Click me! funcion</button>
			)}
		</MyContext.Consumer>
	);
}

class ThemeButtonClass extends Component {
	static contextType = MyContext;

	render() {
		return (
			<button style={{ color: this.context.buttonColor }}>
				Click me! class
			</button>
		);
	}
}

function ToolBar(props) {
	return (
		<div>
			<ThemeButton />
			<ThemeButton />
			<ThemeButtonClass />
		</div>
	);
}

function Chapter7_2() {
	return (
		<div>
			<MyContext.Provider value={theme}>
				<h2>Chapter7.2 Context Api</h2>
				<ToolBar />
			</MyContext.Provider>
		</div>
	);
}
export default Chapter7_2;
