import React from 'react';

import { Container, Options, Item } from './styles';

interface MicroCredQuizProps {
	text: string;
	image: string;
  question: string;
  options: string[];
	showTitle?: boolean;
}

const MicroCredQuiz: React.FC<MicroCredQuizProps> = ({
	text,
	image,
  question,
  options,
	showTitle = false,
}) => {
	return (
		<Container>
			{showTitle && <h1>Quiz:</h1>}

			<p>{text}</p>

			<figure>
				<img src={image} alt='Image Question' />
			</figure>

			<p className='question'>{question}</p>

			<Options>
        {options.map((opt) => (
          <Item>
            {opt}
          </Item>
        ))}
      </Options>
		</Container>
	);
};

export default MicroCredQuiz;
