import ReactDOM from 'react-dom';
import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Player from './components/Player/Player';
import Search from './components/Search/Search'
import {fetchVideo} from './actions/fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

require('../styles/index.scss');

const muiTheme = getMuiTheme({
  slider: {
    selectionColor: '#70d9ff',
    handleFillColor: '#70d9ff',
    rippleColor: '#70d9ff'
  }
});


ReactDOM.render(
		<MuiThemeProvider muiTheme={muiTheme}>
			<div>
				<HashRouter>
					<div>
						<Route path='/' component={Header} />
						<Switch>
							<Route exact path='/' component={Video} />
							<Route path='/video/:id' component={Player} />
							<Route path='/search/:query' component={Search} />
							<Redirect to='/' />
						</Switch>
					</div>
				</HashRouter> 
			</div>
		</MuiThemeProvider>
	,
	document.getElementById('app')
);

