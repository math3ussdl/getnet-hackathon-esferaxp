import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import {
	Container,
	EsferaLinks,
	Brands,
	Logo,
	SocialMedia,
	Menu,
	SantanderBrand,
} from './styles';

import logo from '../../assets/icons/logotipo_esfera.svg';
import santanderBrand from '../../assets/images/santander.png';

const Footer: React.FC = () => {
	return (
		<Container>
			<EsferaLinks>
				<Brands>
					<Logo src={logo} alt='Esfera' />
					<SocialMedia>
						<FaFacebookF className='icon' size={20} color='#EC0000' />
						<FaInstagram
							className='icon'
							style={{ marginLeft: '.25rem' }}
							size={20}
							color='#EC0000'
						/>
						<FaLinkedinIn
							className='icon'
							style={{ marginLeft: '.5rem' }}
							size={20}
							color='#EC0000'
						/>
					</SocialMedia>
				</Brands>

				<Menu>
					<ul>
						<span>O que você quer fazer hoje?</span>
						<li>Produtos</li>
						<li>Viagens</li>
						<li>Experiências</li>
					</ul>

					<ul className='without-span'>
						<li>Vale-Compras</li>
						<li>Descontos</li>
						<li>Ganhe Pontos</li>
					</ul>

					<ul>
						<span>Sobre</span>
						<li>Quem Somos</li>
						<li>FAQ</li>
						<li>Termos e Condições</li>
					</ul>
				</Menu>
			</EsferaLinks>

			<SantanderBrand>
				<span>
					Uma empresa <img src={santanderBrand} alt='' />
				</span>
			</SantanderBrand>
		</Container>
	);
};

export default Footer;
