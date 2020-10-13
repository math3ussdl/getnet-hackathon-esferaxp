import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@chakra-ui/core';

import { Container, BtnBox } from './styles';

interface IGQuizProps {
  text: string;
  image: string;
  question: string;
  showTitle?: boolean;
  linkTo: string;
  lsName: string;
}

const IGQuiz: React.FC<IGQuizProps> = ({
  text,
  image,
  question,
  showTitle = false,
  linkTo,
  lsName
}) => {
  const history = useHistory();

  return (
    <Container>
      {showTitle && (
        <h1>Quiz:</h1>
      )}

      <p>{text}</p>

      <figure>
        <img src={image} alt='Question' />
      </figure>

      <p className='question'>{question}</p>

      <BtnBox>
        <Button onClick={() => {
          localStorage.setItem(lsName, 'Errado');
          history.push(linkTo);
        }} variantColor='red'>Errado</Button>

        <Button onClick={() => {
          localStorage.setItem(lsName, 'Certo');
          history.push(linkTo);
        }} variantColor='green'>Certo</Button>
      </BtnBox>
    </Container>
  );
};

export default IGQuiz;
