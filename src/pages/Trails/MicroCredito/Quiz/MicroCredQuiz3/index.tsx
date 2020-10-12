import React from 'react';

import MicroCredQuiz from '../../../../../components/MicroCredQuiz';

import cardMachine from '../../../../../assets/images/card-machine.png';

import { Container } from './styles';

const MicroCredQuiz3: React.FC = () => {
	return (
		<Container>
			<MicroCredQuiz
				text='E para finalizar...'
				image={cardMachine}
				question='É possível conseguir crédito através da própria maquininha da Getnet?'
				options={[
					'A. Não sei.',
					'B. É possível.',
					'C. Não,a maquininha serve apenas para receber dos clientes.',
        ]}
        linkTo='/xp/quiz/microcred-quiz/success'
        lsName='q3'
			/>
		</Container>
	);
};

export default MicroCredQuiz3;
