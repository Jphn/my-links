import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { Subtitle, Title } from './styles';

export default function Description() {
	const user = useContext(UserContext);

	return (
		<>
			<Title>{user.name}</Title>
			<Subtitle>{user.bio}</Subtitle>
		</>
	);
}
