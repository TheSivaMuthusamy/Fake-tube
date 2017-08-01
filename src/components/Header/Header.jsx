import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar'

function Logo() {
	return (
		<div>
			<Link to='/'><h1>Fake-tube</h1></Link>
		</div>
	);
}

function Login() {
	return (
		<div>
			Login
		</div>
	)
}

function Menu() {
	return (
		<div className="search-bar">
			<SearchBar />
		</div>
	);
}

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header-content">
					<Logo />
					<Menu />
					<Login />
				</div>
			</div>
		)
	}
}