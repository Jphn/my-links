import axios from 'axios';
import LinksList from './components/LinksList';
import Profile from './components/Profile';
import { GlobalWrapper } from './styles';
import './App.css';
import { useEffect, useState } from 'react';
import UserContext from './contexts/UserContext';
import { useParams } from 'react-router-dom';

function App() {
	const [userData, setUserData] = useState({});

	const { username } = useParams();

	useEffect(() => {
		axios
			.get(`https://api.github.com/users/${username}`)
			.then((response) => response.data)
			.then((data) => setUserData(data));
	}, []);

	return (
		<UserContext.Provider value={userData}>
			<GlobalWrapper>
				<Profile />
				<LinksList />
			</GlobalWrapper>
		</UserContext.Provider>
	);
}

export default App;
