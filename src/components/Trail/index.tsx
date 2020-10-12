import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Button } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

import { Container, TrailInfo, TrailText, ProgressStyles } from './styles';

interface TrailProps {
	title: string;
	description: string;
	link: string;
	progress?: number;
	image?: string;
}

const Trail: React.FC<TrailProps> = ({
	title,
	description,
	link,
	progress,
	image,
}) => {
	const history = useHistory();

	return (
		<Container>
			<TrailInfo>
				<TrailText>
					<h1>{title}</h1>
					<p>{description}</p>
				</TrailText>

				<Button
					onClick={() => {
						history.push(link);
						window.scrollTo(0, 0);
					}}
				>
					Começar
				</Button>
			</TrailInfo>

			{progress ? (
				<CircularProgressbar
					value={progress}
					strokeWidth={10}
					styles={ProgressStyles}
				/>
			) : (
				<img src={image} alt='icon' />
			)}
		</Container>
	);
};

export default Trail;
