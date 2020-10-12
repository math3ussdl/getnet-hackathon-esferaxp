import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@chakra-ui/core';

import Routes from './Routes';

import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<GlobalStyles />
			<Routes />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
