import React from 'react';
import IGQuiz from '../../../../../components/IGQuiz';

import person from '../../../../../assets/images/person.png';

import { Container } from './styles';

const IGQuiz1: React.FC = () => {
  return (
    <Container>
      <IGQuiz
        showTitle
        text='Aqui vão quatro perguntas sobre o que você acabou de aprender! Preparado?'
        image={person}
        question='Produzir conteúdos de acordo com as necessidades e problemas do seu cliente é:'
      />
    </Container>
  );
};

export default IGQuiz1;
