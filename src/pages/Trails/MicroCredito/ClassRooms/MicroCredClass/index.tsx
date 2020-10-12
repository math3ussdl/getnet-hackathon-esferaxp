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
        video=''
				description='Assista o vídeo acima para avançar!'
			/>
		</Container>
	);
};

export default MicroCredClass;
