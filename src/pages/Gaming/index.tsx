import { Flex } from '@chakra-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import ninja from '../../assets/animations/ninja004.gif';
import ninja2 from '../../assets/images/ninja2.png';
import ninja3 from '../../assets/images/ninja1.png';
import ninja4 from '../../assets/images/ninja3.png';

import trophy from '../../assets/images/t1.png';
import trophy2 from '../../assets/images/t2.png';
import trophy3 from '../../assets/images/t3.png';
import trophy4 from '../../assets/images/t4.png';
import trophy5 from '../../assets/images/t5.png';
import trophy6 from '../../assets/images/t6.png';
import trophy7 from '../../assets/images/t7.png';
import trophy8 from '../../assets/images/t8.png';
import trophy9 from '../../assets/images/t9.png';

import ranking from '../../assets/images/ranking.png';

import { Bar, Ninjas, Rank, Ranking, Score, Trophy, Trophies } from './styles';

const Gaming: React.FC = () => {
	return (
		<>
			<Header />

			<Score>
				<span>Cada meta atingida você desbloqueia um nível </span>
				<Flex justifyContent='space-between' align='center'>
					<Ninjas src={ninja} alt='ninja 1' />
					<Ninjas src={ninja2} alt='ninja 2' />
					<Ninjas src={ninja3} alt='ninja 3' />
					<Ninjas src={ninja4} alt='ninja 4' />
				</Flex>

				<Bar value={5} max={100} />

				<Flex justifyContent='space-between' align='center'>
					<span>Desesperado</span>
					<span>Desafiador</span>
					<span>Observador</span>
					<span>Em crescimento</span>
				</Flex>
			</Score>

			<Trophies>
				<span>E ganha medalhas de acordo com o desempenho nas tarefas</span>

				<Flex className='flex' justifyContent='space-between' align='center'>
					<Trophy src={trophy} alt='trophy 1' />
					<Trophy src={trophy2} alt='trophy 2' />
					<Trophy src={trophy3} alt='trophy 3' />
					<Trophy src={trophy4} alt='trophy 4' />
					<Trophy src={trophy5} alt='trophy 5' />
					<Trophy src={trophy6} alt='trophy 6' />
					<Trophy src={trophy7} alt='trophy 7' />
					<Trophy src={trophy8} alt='trophy 8' />
					<Trophy src={trophy9} alt='trophy 9' />
				</Flex>

				<Flex
					className='flex-mob'
					justifyContent='space-between'
					direction='column'
					align='center'
				>
					<Trophy src={trophy} alt='trophy 1' />
					<Trophy src={trophy2} alt='trophy 2' />
					<Trophy src={trophy3} alt='trophy 3' />
					<Trophy src={trophy4} alt='trophy 4' />
					<Trophy src={trophy5} alt='trophy 5' />
					<Trophy src={trophy6} alt='trophy 6' />
					<Trophy src={trophy7} alt='trophy 7' />
					<Trophy src={trophy8} alt='trophy 8' />
					<Trophy src={trophy9} alt='trophy 9' />
				</Flex>
			</Trophies>

			<Ranking>
				<span>
					Quando você se destaca muito, pode aparecer no ranking geral:
				</span>

				<Flex justifyContent='center' align='center'>
					<Rank src={ranking} alt='ranking' />
				</Flex>
			</Ranking>

			<Footer />
		</>
	);
};

export default Gaming;
