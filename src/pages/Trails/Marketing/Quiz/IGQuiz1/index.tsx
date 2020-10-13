import React from 'react';
import { useHistory } from 'react-router-dom';

import IGQuiz from '../../../../../components/IGQuiz';

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/core';

import person from '../../../../../assets/images/person.png';

import { Container } from './styles';

const IGQuiz1: React.FC = () => {
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
						Bem-Vindo ao Quiz do Módulo 1
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

			<IGQuiz
				showTitle
				text='Aqui vão quatro perguntas sobre o que você acabou de aprender! Preparado?'
				image={person}
				question='Produzir conteúdos de acordo com as necessidades e problemas do seu cliente é:'
				linkTo='/xp/quiz/ig-quiz/2'
				lsName='q1'
			/>
		</Container>
	);
};

export default IGQuiz1;
