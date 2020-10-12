import React from 'react';
import { Box, Flex, Grid } from '@chakra-ui/core';

import { Container } from './styles';

interface CardProps {
	image: string;
	text: string;
	rangeText?: string;
	ptValue: number;
	legend?: string;
}

const Card: React.FC<CardProps> = ({
	image,
	text,
	rangeText,
	ptValue,
	legend,
}) => {
	return (
		<Container>
			<Flex align='center'>
				<Grid templateRows='repeat(4, .5fr)'>
					<Grid>
						<figure>
							<img src={image} alt='card image' />
						</figure>
					</Grid>

					<Grid>
						<span>{text}</span>
					</Grid>

					<Grid>
						<small>{rangeText}</small>
						<p>
							<strong>{ptValue}</strong> pts
						</p>

						<small className='gray'>{legend}</small>
					</Grid>
				</Grid>
			</Flex>
		</Container>
	);
};

export default Card;
