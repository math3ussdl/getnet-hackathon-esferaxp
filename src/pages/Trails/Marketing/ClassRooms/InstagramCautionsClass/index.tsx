import React from 'react';

import { Container } from './styles';

import instagramClass from '../../../../../assets/images/instagram-class-2.png';

import Header from '../../../../../components/Header';
import ClassRoom from '../../../../../components/ClassRoom';

const InstagramCautionsClass: React.FC = () => {
	return (
		<Container>
			<Header />

			<ClassRoom
				title='O que eu posso (ou não) fazer no instagram?'
				text={[
					'O Instagram é uma rede social aberta, portanto você pode postar e curtir, seguir a vontade! Porém vamos dar algumas dicas para desenvolver digitalmente seu negócio lá!',
					'Algumas boas condutas para melhorar seu “insta” são:'
        ]}
        topics={[
          'Divulgar seus produtos;',
          'Produzir conteúdos de acordo com seu cliente;',
          'Usar “hashtags” (#) que estejam correlacionadas com seu publico alvo;',
          'Não faça spam em grupos do facebook.'
        ]}
				image={instagramClass}
				description='A seguir teremos um pequeno quiz para testar seu aprendizado!!'
			/>
		</Container>
	);
};

export default InstagramCautionsClass;
