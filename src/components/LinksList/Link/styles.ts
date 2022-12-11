import styled from 'styled-components';
import Colors from '../../../styles/Colors';

export const LinkWrapper = styled.a`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	padding: 1.2rem;
	height: fit-content;
	width: min(70vw);

	border-radius: 2rem;

	background-color: ${Colors.linkBgLight};
`;

export const LinkIcon = styled.img`
	width: 6rem;
`;

export const LinkLabel = styled.p`
	font-size: 2rem;
	text-transform: uppercase;
	font-weight: 500;

	display: flex;
	justify-content: center;
	align-items: center;

	color: ${Colors.textDark};
`;
