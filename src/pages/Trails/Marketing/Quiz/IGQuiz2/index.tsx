import React from 'react';
import IGQuiz from '../../../../../components/IGQuiz';

import phone from '../../../../../assets/images/phone.png';

import { Container } from './styles';

const IGQuiz2: React.FC = () => {
  return (
    <Container>
      <IGQuiz
        text='Boa, continue assim!'
        image={phone}
        question='Usar as redes sociais apenas como um vitrine, somente para anunciar seu produto/serviço é:'
      />
    </Container>
  );
};

export default IGQuiz2;
