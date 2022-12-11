import Description from './Description';
import Icon from './Icon';
import { ProfileWrapper } from './styles';

export default function Profile() {
	return (
		<ProfileWrapper>
			<Icon />
			<Description />
		</ProfileWrapper>
	);
}
