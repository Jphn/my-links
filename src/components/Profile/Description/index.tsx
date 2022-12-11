import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { DescriptionWrapper, Subtitle, Title } from './styles';

export default function Description() {
	const user = useContext(UserContext);

	return (
		<DescriptionWrapper>
			<Title>{user.name}</Title>
			<Subtitle>{user.bio}</Subtitle>
		</DescriptionWrapper>
	);
}
