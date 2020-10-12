import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@chakra-ui/core';
import HeaderMain from '../../components/HeaderMain';

import { Container, Banner } from './styles';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <HeaderMain />

      <Banner>
        <Button onClick={() => {
          history.push('/xp');
          window.scrollTo(0, 0);
        }}>Vamos nessa! <FaArrowAltCircleRight className='icon' /></Button>
      </Banner>
    </Container>
  );
};

export default Home;
