import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Logo, Menu, Item } from './styles';

import logo from '../../assets/images/esferaxp.png';

const Header: React.FC = () => {
	const history = useHistory();

	return (
		<Container>
			<Logo
				onClick={() => {
					history.push('/');
					window.scrollTo(0, 0);
				}}
				src={logo}
				alt='Logo da Esfera'
			/>

			<Menu>
				<Item>RANKING</Item>

				<Item>TRILHAS</Item>

				<Item>PRÊMIOS</Item>
			</Menu>
		</Container>
	);
};

export default Header;
