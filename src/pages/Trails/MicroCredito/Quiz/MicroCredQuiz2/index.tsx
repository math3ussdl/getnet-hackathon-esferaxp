import React from 'react';

import MicroCredQuiz from '../../../../../components/MicroCredQuiz';

import percent from '../../../../../assets/images/percent.png';

import { Container } from './styles';

const MicroCredQuiz2: React.FC = () => {
	return (
		<Container>
			<MicroCredQuiz
				text='Boa, continue assim!'
				image={percent}
				question='As taxas do microcrédito em relação ao crédito normal são?'
        options={['A. Maiores.', 'B. Não sei.', 'C. Menores.']}
        linkTo='/xp/quiz/microcred-quiz/3'
        lsName='q2'
			/>
		</Container>
	);
};

export default MicroCredQuiz2;
