import React from 'react';

import { Container } from './styles';

import ninja from '../../../../../assets/animations/ninja002.gif'
import instagramClass from '../../../../../assets/images/instagram-class.png';
import instagramButton from '../../../../../assets/images/instagram.png';

import Header from '../../../../../components/Header';
import ClassRoom from '../../../../../components/ClassRoom';

const InstagramClass: React.FC = () => {
	return (
		<Container>
			<Header />

			<ClassRoom
				title='Criando o Instagram'
				text={[
					'Hoje, a saida para muitos negócios é se digitalizar e vender online! Existem muitas ferramentas para isso mas a rede social Instagram pode te ajudar muito.',
					'Para criar basta voce entrar no site do instagram(link aqui), se registar colocar o nome da sua loja, uma foto bonita do perfil e pronto! Seu negócio acaba de ser digitalizado!!',
				]}
				image={instagramClass}
				description={`Clique no símbolo do instagram para ser redirecionado \n e passar essa fase:`}
			>
				<a href='' target='_blank' rel='noopener noreferrer'>
					<img src={instagramButton} alt='instagram' />
				</a>

        <figure>
          <img src={ninja} alt='ninja' />
        </figure>
			</ClassRoom>
		</Container>
	);
};

export default InstagramClass;
