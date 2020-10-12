import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/core';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const ComingSoon: React.FC = () => {
  const history = useHistory();

	return (
		<Flex
			align='center'
			justifyContent='center'
			height='100%'
      direction='column'
      color='var(--color-primary)'
		>
			<h1>Coming Soon!!</h1>
			<span>Funcionalidade em Desenvolvimento!</span>

      <Button style={{
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        border: 0,
        marginTop: '1.5rem',
        cursor: 'pointer'
      }} onClick={() => history.goBack()}><MdKeyboardArrowLeft /> Go Back</Button>
		</Flex>
	);
};

export default ComingSoon;
