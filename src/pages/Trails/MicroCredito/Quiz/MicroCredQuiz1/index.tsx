import React from 'react';
import { useHistory } from 'react-router-dom';

import MicroCredQuiz from '../../../../../components/MicroCredQuiz';

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/core';

import bank from '../../../../../assets/images/bank.png';

import { Container } from './styles';

const MicroCredQuiz1: React.FC = () => {
	const history = useHistory();

	const [isOpen, setIsOpen] = React.useState(true);
	const onClose = () => setIsOpen(false);
	const cancelRef = React.useRef(null);

	return (
		<Container>
			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay />
				<AlertDialogContent>
					<AlertDialogHeader fontSize='lg' fontWeight='bold'>
						Bem-Vindo ao Quiz do Módulo 2
					</AlertDialogHeader>

					<AlertDialogBody>
						Você Está Preparado? Se não estiver pronto, você poderá retornar
						para as aulas e estudar mais.
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button
							style={{ marginRight: '.5rem' }}
							onClick={() => {
								history.push('/xp/trails/mkt-digital');
								window.scrollTo(0, 0);
							}}
							ml={3}
						>
							Quero estudar Mais!
						</Button>
						<Button variantColor='green' ref={cancelRef} onClick={onClose}>
							Estou!
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<MicroCredQuiz
				showTitle
				text='Aqui vão três perguntas sobre o que você acabou de aprender! Preparado?'
				image={bank}
				question='Microempreendedores tem direito a algum beneficio relacionado a crédito?'
				options={['A. Sim, o microcrédito!', 'B. Não!', 'C. Não sei.']}
				linkTo='/xp/quiz/microcred-quiz/2'
				lsName='q1'
			/>
		</Container>
	);
};

export default MicroCredQuiz1;
