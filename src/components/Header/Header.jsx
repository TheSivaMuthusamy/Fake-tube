import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/header';
import { push } from 'react-router-redux';

function Logo() {
	return (
		<div className= "logo">
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

class Menu extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render(){
		return (
			<div className="search-bar">
				<SearchBar inputValue={this.props.inputValue}
					onChange={this.props.onChange}
					onSearch={this.props.onSearch}
					data={this.props.data}
					history={this.props.history} 
					location={this.props.location}
					goto = {this.props.goto}/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header-content">
					<Logo />
					<Menu inputValue={this.props.inputValue}
					onChange={this.props.onChange}
					onSearch={this.props.onSearch}
					data={this.props.data}
					history={this.props.history} 
					location={this.props.location}
					goto = {this.props.goto} />
					<Login />
				</div>
			</div>
		)
	}
}

function mapStatetoProps(state) {
	return {
		inputValue: state.app.inputValue,
		data: state.app.data
	}
}

function mapDispatchtoProps(dispatch) {
	return {
		onChange: bindActionCreators(actions.onChange, dispatch),
		onSearch: bindActionCreators(actions.onSearch, dispatch),
		goto: function(path) { dispatch( push(path) ) }
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header)
