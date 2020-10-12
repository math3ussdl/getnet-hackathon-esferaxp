import React from 'react';

import { Container, Main, Trails } from './styles';

import ninja from '../../assets/animations/ninja001.gif';

import Header from '../../components/Header';
import Trail from '../../components/Trail';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
	return (
		<Container>
			<Header />

			<Main>
				<figure>
					<img src={ninja} alt='ninja' />
				</figure>

				<p>
					Aqui você irá aprender como alavancar sua <br />
					microempresa através de trilhas e jogos. <br />
					De maneira didática, fácil e rápida! <br />
				</p>
			</Main>

			<Trails>
				<Trail
					title='Make money online'
					description='Aprenda a utilizar as redes sociais para aumentar suas vendas!'
					progress={15}
					link='/xp/trails/mkt-digital'
				/>

				<Trail
					title='Expansão'
					description='Aprenda o que é e as vantagens de um microcrédito!'
					progress={50}
					link='/xp/trails/microcredito'
				/>
			</Trails>

      <Footer />
		</Container>
	);
};

export default Home;
