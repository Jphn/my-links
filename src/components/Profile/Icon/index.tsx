import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { ProfilePicture } from './styles';

export default function Icon() {
	const user = useContext(UserContext);

	return <ProfilePicture src={user.avatar_url} />;
}
