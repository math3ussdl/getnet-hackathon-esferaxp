import React from 'react';

import { Container, Main, Text, Trails } from './styles';

import ninja from '../../../assets/animations/ninja003.gif';
import moneyBag from '../../../assets/images/moneybag.png';
import quizSign from '../../../assets/images/quizsign.png';

import Header from '../../../components/Header';
import Trail from '../../../components/Trail';

const MicroCredito: React.FC = () => {
	return (
		<Container>
			<Header />

			<Main>
				<figure>
					<img src={ninja} alt='ninja' />
				</figure>

				<Text>
					<h1>Expansão</h1>
					<p>
						Você já ouviu falar sobre o microcrédito? <br />
						Crédito destinado especificamente para pequeno e <br />
						micro empreendedor! <br /> <br />
						Aprenda aqui nessa trilha o que é e como isso <br />
						pode alavancar o seu negócio!
					</p>
				</Text>
			</Main>

			<Trails>
				<Trail
					title='O que é microcrédito?'
					description='Como ele pode te ajudar a prosperar.'
					image={moneyBag}
					link='/xp/classes/microcredito'
				/>

				<Trail
					title='Quiz de aprendizado!'
					description='Vamos ver o que você aprendeu aqui!'
					image={quizSign}
					link='/xp/quiz/microcred-quiz/1'
				/>
			</Trails>
		</Container>
	);
};

export default MicroCredito;
