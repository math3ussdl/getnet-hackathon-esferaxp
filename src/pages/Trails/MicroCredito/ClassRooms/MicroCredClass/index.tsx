import React from 'react';

import { Container } from './styles';

import Header from '../../../../../components/Header';
import ClassRoom from '../../../../../components/ClassRoom';

const MicroCredClass: React.FC = () => {
	return (
		<Container>
			<Header />

			<ClassRoom
				title='O que é microcrédito?'
        video='https://www.youtube.com/watch?v=WsJ6j8MH5lc'
        description='Assista o vídeo acima para avançar!'
        linkTo='/xp/quiz/microcred-quiz/1'
			/>
		</Container>
	);
};

export default MicroCredClass;
