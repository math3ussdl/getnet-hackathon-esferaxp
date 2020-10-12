import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Logo, Menu, Item } from './styles';

import logo from '../../assets/icons/logotipo_esfera.svg';

const HeaderMain: React.FC = () => {
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
				<Item>PRODUTOS</Item>

				<Item>VIAGENS</Item>

				<Item>EXPERIÊNCIAS</Item>

        <Item>VALE-COMPRAS</Item>

        <Item>DESCONTOS</Item>

        <Item>JUNTE PONTOS</Item>

        <Item>PARA SUA EMPRESA</Item>
			</Menu>
		</Container>
	);
};

export default HeaderMain;
