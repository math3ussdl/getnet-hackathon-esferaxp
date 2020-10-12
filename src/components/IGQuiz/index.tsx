import React from 'react';
import { Button } from '@chakra-ui/core';

import { Container, BtnBox } from './styles';

interface IGQuizProps {
  text: string;
  image: string;
  question: string;
  showTitle?: boolean;
}

const IGQuiz: React.FC<IGQuizProps> = ({
  text,
  image,
  question,
  showTitle = false
}) => {
  return (
    <Container>
      {showTitle && (
        <h1>Quiz:</h1>
      )}

      <p>{text}</p>

      <figure>
        <img src={image} alt='Image Question' />
      </figure>

      <p className='question'>{question}</p>

      <BtnBox>
        <Button variantColor='red'>Errado</Button>
        <Button variantColor='green'>Certo</Button>
      </BtnBox>
    </Container>
  );
};

export default IGQuiz;
