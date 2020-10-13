import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Options, Item } from './styles';

interface MicroCredQuizProps {
	text: string;
	image: string;
  question: string;
  options: string[];
  showTitle?: boolean;
  linkTo: string;
  lsName: string;
}

const MicroCredQuiz: React.FC<MicroCredQuizProps> = ({
	text,
	image,
  question,
  options,
  showTitle = false,
  linkTo,
  lsName
}) => {
  const history = useHistory();

	return (
		<Container>
			{showTitle && <h1>Quiz:</h1>}

			<p>{text}</p>

			<figure>
				<img src={image} alt='Question' />
			</figure>

			<p className='question'>{question}</p>

			<Options>
        {options.map((opt) => (
          <Item onClick={() => {
            localStorage.setItem(lsName, opt.charAt(0));
            history.push(linkTo);
          }}>
            {opt}
          </Item>
        ))}
      </Options>
		</Container>
	);
};

export default MicroCredQuiz;
