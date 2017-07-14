import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header/Header'
import Video from './components/Header/Video'
import {fetchVideo} from './actions/fetch'

require('../styles/index.scss');


ReactDOM.render(
	<div>
		<Header />
		<Video />

	</div>
	,
	document.getElementById('app')
);

