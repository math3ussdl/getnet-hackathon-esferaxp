import React from 'react';
import IGQuiz from '../../../../../components/IGQuiz';

import woman from '../../../../../assets/images/woman.png';

import { Container } from './styles';

const IGQuiz3: React.FC = () => {
  return (
    <Container>
      <IGQuiz
        text='Muito bem! Vamos ver o que acha dessa...'
        image={woman}
        question='Fazer spam em grupos de facebook é:'
      />
    </Container>
  );
};

export default IGQuiz3;
