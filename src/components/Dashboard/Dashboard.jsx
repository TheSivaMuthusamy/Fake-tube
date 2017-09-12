import React from 'react';
import SearchBar from '../Header/SearchBar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as headerActions from '../../actions/header';
import * as actions from '../../actions/dashboard'
import {push} from 'react-router-redux';
import {FaArrowCircleOLeft, FaArrowCircleORight} from 'react-icons/lib/fa/'



class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const cn = (this.props.visible) ? 'dashboard' : 'dashboard-hidden'
		return (
			<div>
				<FaArrowCircleORight className="revealButton" size={40} style={{verticalAlign: '-0.9em'}} onClick={this.props.revealDash}/>
				<ul className={cn}>
					<li className="logo">
					<h1>Fake-tube</h1>
					<FaArrowCircleOLeft size={40} style={{verticalAlign: '-0.9em'}} onClick={this.props.hideDash}/>
					</li>
					<li className="search-bar">
						<SearchBar 
								history={this.props.history} 
								location={this.props.location}
								goto = {this.props.goto}/>
					</li>
					<li className="categories" onClick={() => this.props.changeCategory('0')}>Most Popular</li>
					<li className="categories" onClick={() => this.props.changeCategory('27')}>Education</li>
					<li className="categories" onClick={() => this.props.changeCategory('17')}>Sports</li>
					<li className="categories" onClick={() => this.props.changeCategory('28')}>Technology</li>
					<li className="categories" onClick={() => this.props.changeCategory('23')}>Comedy</li>
					<li className="categories" onClick={() => this.props.changeCategory('10')}>Music</li>
					<li className="categories" onClick={() => this.props.changeCategory('20')}>Gaming</li>
					<hr/>
				</ul>
			</div>
		)
	}
}

function mapStatetoProps(state) {
	return {
		inputValue: state.app.inputValue,
		data: state.app.data,
		visible: state.app.visible
	}
}

function mapDispatchtoProps(dispatch) {
	return {
		onChange: bindActionCreators(headerActions.onChange, dispatch),
		onSearch: bindActionCreators(headerActions.onSearch, dispatch),
		hideDash: bindActionCreators(actions.hideDash, dispatch),
		revealDash: bindActionCreators(actions.revealDash, dispatch),
		changeCategory: bindActionCreators(actions.changeCategory, dispatch),
		goto: function(path) { dispatch( push(path) ) }
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Dashboard)