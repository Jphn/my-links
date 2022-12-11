import styled from 'styled-components';
import Colors from './styles/Colors';

export const GlobalWrapper = styled.section`
	width: min(100vw);
	height: min(100vh);

	display: grid;
	align-items: center;
	gap: 0;

	background-color: ${Colors.light};
`;
