import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Player from './components/Player/Player';
import {fetchVideo} from './actions/fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('../styles/index.scss');


ReactDOM.render(
	<MuiThemeProvider>
		<div>
			<Header />
			<Video /> 
		</div>
	</MuiThemeProvider>
	,
	document.getElementById('app')
);

