import './App.css';
import AppRouts from './Routes';
import Nav from './Components/Nav';
import { Home } from './Components';
function App() {
	return (
		<div className='App'>
			<Nav />
			<AppRouts />
			<Home />
		</div>
	);
}

export default App;
