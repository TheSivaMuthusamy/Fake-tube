import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header/Header'
import Video from './components/Video/Video'
import Player from './components/Player/Player'
import {fetchVideo} from './actions/fetch'

require('../styles/index.scss');


ReactDOM.render(
	<div>
		<Header />
		{/* <Video /> */}
		<Player />
	</div>
	,
	document.getElementById('app')
);

