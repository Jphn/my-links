import { LinkIcon, LinkLabel, LinkWrapper } from './styles';

export interface ILinkProps {
	href: string;
	icon: string;
	label: string;
}

export default function Link({ href, icon, label }: ILinkProps) {
	return (
		<LinkWrapper
			href={href}
			target='_blank'
		>
			<LinkIcon src={icon} />
			<LinkLabel>{label}</LinkLabel>
		</LinkWrapper>
	);
}
