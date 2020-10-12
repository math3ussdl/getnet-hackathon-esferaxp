import React from 'react';
import IGQuiz from '../../../../../components/IGQuiz';

import man from '../../../../../assets/images/man.png';

import { Container } from './styles';

const IGQuiz4: React.FC = () => {
	return (
		<Container>
			<IGQuiz
				text='Agora só mais essa última...'
				image={man}
        question='Usar hashtags que estejam correlacionadas com o seu publico alvo é:'
        linkTo='/xp/quiz/ig-quiz/success'
        lsName='q4'
			/>
		</Container>
	);
};

export default IGQuiz4;
