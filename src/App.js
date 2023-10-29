import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import UserContextProvider from './UserProvider';
import RouterProtector from './RouterProtector';


const router = createBrowserRouter([
	{
		path: '/',
		element: 
			<RouterProtector>
				<Home />
			</RouterProtector>
	},
	{
		path: '/login',
		element: <Login />
	}
])

function App() {
	return (
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	);
}

export default App;
