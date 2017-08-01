import ReactDOM from 'react-dom';
import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Player from './components/Player/Player';
import {fetchVideo} from './actions/fetch';


require('../styles/index.scss');


ReactDOM.render(
		<div>
			<HashRouter>
				<div>
					<Route path='/' component={Header} />
					<Switch>
						<Route exact path='/' component={Video} />
						<Route path='/video/:id' component={Player} />
						<Route path='/search/:query' component={search} />
						<Redirect to='/' />
					</Switch>
				</div>
			</HashRouter> 
		</div>
	,
	document.getElementById('app')
);

