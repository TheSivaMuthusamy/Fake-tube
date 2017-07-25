import React from 'react';

function Logo() {
	return (
		<div>
			<h1>Electro-tube</h1>
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