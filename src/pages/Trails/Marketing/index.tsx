import React from 'react';

import { Container, Main, Text, Trails } from './styles';

import ninja from '../../../assets/animations/ninja004.gif';
import instagram from '../../../assets/images/instagram.png';
import triangle from '../../../assets/images/triangle.png';
import quizSign from '../../../assets/images/quizsign.png';

import Header from '../../../components/Header';
import Trail from '../../../components/Trail';

const Marketing: React.FC = () => {
	return (
		<Container>
			<Header />

			<Main>
				<Text>
					<h1>Make money online</h1>
					<p>
						Uma grande ferramenta atual que pode alavancar <br />
						seu negócio é o instagram. Aqui você vai aprender <br />
						a criar um e utiliza-lo da forma correta para obter <br />
						resultados!
					</p>
				</Text>

				<figure>
					<img src={ninja} alt='ninja' />
				</figure>
			</Main>

			<Trails>
				<Trail
					title='Criando o instagram'
					description='Primeiro passo nas redes sociais!'
					image={instagram}
					link='/xp/classes/instagram'
				/>

				<Trail
					title='O que posso (ou não posso) fazer nele?'
					description='Tenho um instagram e agora?'
					image={triangle}
					link='/xp/classes/instagram/cautions'
				/>

				<Trail
					title='Quiz de aprendizado!'
					description='Vamos ver o que você aprendeu aqui!'
					image={quizSign}
					link='/xp/quiz/ig-quiz'
				/>
			</Trails>
		</Container>
	);
};

export default Marketing;
