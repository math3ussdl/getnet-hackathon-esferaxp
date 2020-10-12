import React from 'react';
import { useHistory } from 'react-router-dom';

import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	DrawerBody,
} from '@chakra-ui/core';

import { Container, Logo, Menu, Item, MobileMenu } from './styles';

import logo from '../../assets/icons/logotipo_esfera.svg';
import { MdMenu } from 'react-icons/md';

const HeaderMain: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef(null);

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
				<Item href='/coming-soon'>PRODUTOS</Item>

				<Item href='/coming-soon'>VIAGENS</Item>

				<Item href='/coming-soon'>EXPERIÊNCIAS</Item>

				<Item href='/coming-soon'>VALE-COMPRAS</Item>

				<Item href='/coming-soon'>DESCONTOS</Item>

				<Item href='/coming-soon'>JUNTE PONTOS</Item>

				<Item href='/coming-soon'>PARA SUA EMPRESA</Item>
			</Menu>

			<MobileMenu>
				<Button
					ref={btnRef}
					variant='link'
					style={{ border: 'none', outline: 0 }}
					onClick={onOpen}
				>
					<MdMenu
						color='#EC0000'
						size={45}
						style={{ marginRight: '1.5rem', marginTop: '.5rem' }}
					/>
				</Button>

				<Drawer
					isOpen={isOpen}
					placement='right'
					onClose={onClose}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />

						<DrawerBody>
							<Item href='/coming-soon'>PRODUTOS</Item>

							<Item href='/coming-soon'>VIAGENS</Item>

							<Item href='/coming-soon'>EXPERIÊNCIAS</Item>

							<Item href='/coming-soon'>VALE-COMPRAS</Item>

							<Item href='/coming-soon'>DESCONTOS</Item>

							<Item href='/coming-soon'>JUNTE PONTOS</Item>

							<Item href='/coming-soon'>PARA SUA EMPRESA</Item>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</MobileMenu>
		</Container>
	);
};

export default HeaderMain;
