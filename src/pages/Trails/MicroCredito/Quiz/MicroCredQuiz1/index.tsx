import React from 'react';

import MicroCredQuiz from '../../../../../components/MicroCredQuiz';

import bank from '../../../../../assets/images/bank.png';

import { Container } from './styles';

const MicroCredQuiz1: React.FC = () => {
	return (
		<Container>
			<MicroCredQuiz
				showTitle
				text='Aqui vão três perguntas sobre o que você acabou de aprender! Preparado?'
				image={bank}
				question='Microempreendedores tem direito a algum beneficio relacionado a crédito?'
				options={['A. Sim, o microcrédito!', 'B. Não!', 'C. Não sei.']}
			/>
		</Container>
	);
};

export default MicroCredQuiz1;
