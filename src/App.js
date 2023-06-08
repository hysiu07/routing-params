import './App.css';
import AppRouts from './Routes';
import Nav from './Components/Nav';
import { Home, Movies } from './Components';
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
