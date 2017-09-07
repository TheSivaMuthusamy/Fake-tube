import React from 'react';
import SearchBar from '../Header/SearchBar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/header';
import {push} from 'react-router-redux';
import {FaArrowCircleOLeft, FaArrowCircleORight} from 'react-icons/lib/fa/'



class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true
		}
	}

	render() {
		const cn = (this.state.visible) ? 'dashboard' : 'dashboard-hidden'
		return (
			<ul className={cn}>
				<li className="logo">
				<h1>Fake-tube</h1>
				<FaArrowCircleOLeft size={40} style={{verticalAlign: '-0.9em'}}/>
				</li>
				<li className="search-bar">
					<SearchBar inputValue={this.props.inputValue}
							onChange={this.props.onChange}
							onSearch={this.props.onSearch}
							data={this.props.data}
							history={this.props.history} 
							location={this.props.location}
							goto = {this.props.goto}/>
				</li>
				<li className="categories">Most popular</li>
			</ul>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Dashboard)