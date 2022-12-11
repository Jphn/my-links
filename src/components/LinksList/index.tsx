import { keyboard } from '@testing-library/user-event/dist/keyboard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Link from './Link';
import { LinksWrapper } from './styles';

export interface ISocial {
	icon: string;
	href: string;
	label: string;
}

export default function Links() {
	const [linksData, setLinksData] = useState([]);

	const { username } = useParams();

	function loadIcons(linksList: ISocial[]) {
		let links: JSX.Element[] = [];

		linksList.forEach((value, key) => {
			links.push(
				<Link
					icon={value.icon}
					href={value.href}
					key={key}
					label={value.label}
				/>
			);
		});

		return links.length === 0 ? <>No Links Found!</> : links;
	}

	useEffect(() => {
		axios
			.get(
				`https://raw.githubusercontent.com/${username}/my-links-repository/master/links.json`
			)
			.then((response) => response.data)
			.then((data) => setLinksData(data));
	}, []);

	return <LinksWrapper>{loadIcons(linksData)}</LinksWrapper>;
}
