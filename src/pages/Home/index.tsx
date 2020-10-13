import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Flex, Input } from '@chakra-ui/core';
import HeaderMain from '../../components/HeaderMain';

import { Container, Banner, CardSection, CashBackSection } from './styles';
import { MdSubdirectoryArrowRight } from 'react-icons/md';

import esferaapp from '../../assets/images/banner2.png';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { FaMinus, FaPlus } from 'react-icons/fa';

import cashbackImg from '../../assets/images/cashback.webp';
import compraPontosImg from '../../assets/images/comprapontos.webp';
import shellImg from '../../assets/images/shell.webp';
import uberImg from '../../assets/images/uber.webp';

const Home: React.FC = () => {
	const history = useHistory();

	const [count, setCount] = React.useState(0);

	const countIncrement = () => setCount(count + 1);

	const countDecrement = () => setCount(count - 1);

	return (
		<Container>
			<HeaderMain />

			<Banner
				onClick={() => {
					history.push('/xp');
					window.scrollTo(0, 0);
				}}
			/>

			<figure>
				<img src={esferaapp} alt='esferaapp' />
				<div
					onClick={() =>
						(window.location.href =
							'https://play.google.com/store/apps/details?id=br.com.vcesfera&hl=pt_BR&gl=US')
					}
					className='button-holder'
				></div>
			</figure>

			<span>Você pode gostar</span>
			<CardSection>
				<Card
					image={cashbackImg}
					text='Troque seus pts por crédito na fatura do cartão de crédito'
					rangeText='A partir de'
					ptValue={1000}
				/>

				<Card
					image={compraPontosImg}
					text='Compra de Pontos'
					rangeText='A partir de'
					ptValue={1000}
				/>

				<Card
					image={shellImg}
					text='Crédito Combustível Shell Box'
					ptValue={2500}
				/>

				<Card
					image={uberImg}
					text='UBER – Crédito para viagens'
					ptValue={1200}
					legend='ou 480 pts + dinheiro'
				/>
			</CardSection>

			<CashBackSection>
				<span>Cashback pra você</span>
				<p>
					Troque pontos para abater valor em dinheiro na fatura do cartão de
					crédito
				</p>

				<p className='question'>Quantos pontos deseja trocar?</p>

				<Flex>
					<FaMinus
						color={count == 0 ? '#999999' : '#EC0000'}
						onClick={
							count >= 1
								? countDecrement
								: () => console.log('Contador vazio!!')
						}
						className='icon minus'
					/>
					<Input value={count} variant='flushed' />
					<FaPlus onClick={countIncrement} className='icon plus' />

					<Button>Simular</Button>
				</Flex>

				<small>troca mínima de pontos</small>
			</CashBackSection>

			<Footer />
		</Container>
	);
};

export default Home;
