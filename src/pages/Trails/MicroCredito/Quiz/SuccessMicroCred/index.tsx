import _ from 'lodash';

import React from 'react';
import { useHistory } from 'react-router-dom';

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
	Flex,
} from '@chakra-ui/core';

const SuccessMicroCred: React.FC = () => {
	const history = useHistory();

	const [isOpen, setIsOpen] = React.useState(true);
	const onClose = () => setIsOpen(false);
	const cancelRef = React.useRef(null);

	const [score, setScore] = React.useState(0);

	const answers: string[] = [];
	const rightAnswers = ['A', 'C', 'B'];

	const right: boolean[] = [];

	React.useEffect(() => {
		answers.push(localStorage.getItem('q1')!);
		answers.push(localStorage.getItem('q2')!);
		answers.push(localStorage.getItem('q3')!);

		answers.forEach((ans, index) => {
			if (ans === rightAnswers[index]) {
				right.push(true);
			} else {
				right.push(false);
			}
		});

		var answersBool = _.countBy(right);
		console.log(answersBool);

		switch (answersBool.true) {
			case 1:
				setScore(30);
				break;
			case 2:
				setScore(65);
				break;
			case 3:
				setScore(100);
				break;
		}
	}, []);

	return (
		<Flex
			align='center'
			height='100%'
			justifyContent='center'
			backgroundColor={
				score <= 25
					? '#EC0000'
					: score <= 50
					? '#FFFF00'
					: score <= 75
					? '#ADFF2F'
					: '#008000'
			}
		>
			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay />
				<AlertDialogContent>
					<AlertDialogHeader fontSize='lg' fontWeight='bold'>
						{score >= 50 ? 'Parabéns' : 'Oops!'}
					</AlertDialogHeader>

					<AlertDialogBody>
						Você acertou <strong>{score}%</strong> das questões.
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button
							variantColor='green'
							onClick={() => {
								localStorage.clear();
								history.push('/xp/trails/microcredito');
								window.scrollTo(0, 0);
							}}
							ml={3}
						>
							Continuar
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</Flex>
	);
};

export default SuccessMicroCred;
