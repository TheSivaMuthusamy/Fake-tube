import React from 'react';
import {Link} from 'react-router-dom'

function Logo() {
	return (
		<div>
			<Link to='/'><h1>Electro-tube</h1></Link>
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
		<ul>
			<li>Trending</li>
			<li>Trending</li>
		</ul>
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