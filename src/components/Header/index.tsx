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

import { MdMenu } from 'react-icons/md';

import { Container, Logo, Menu, Item, MobileMenu } from './styles';

import logo from '../../assets/images/esferaxp.png';

const Header: React.FC = () => {
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
				<Item href='/coming-soon'>RANKING</Item>

				<Item href='/coming-soon'>TRILHAS</Item>

				<Item href='/coming-soon'>PRÊMIOS</Item>
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
							<Item href='/coming-soon'>RANKING</Item>

							<Item href='/coming-soon'>TRILHAS</Item>

							<Item href='/coming-soon'>PRÊMIOS</Item>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</MobileMenu>
		</Container>
	);
};

export default Header;
