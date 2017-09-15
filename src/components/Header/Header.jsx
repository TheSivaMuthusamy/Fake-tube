import React from 'react';
import SearchBar from './SearchBar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/header';
import {FaSearch} from 'react-icons/lib/fa/';

class Header extends React.Component {
	render() {
		const menuStyle = {
			left: 'auto',
			top: 'auto',
			position: 'absolute',
			zIndex: '99',
			fontSize: '16px',
			fontWeight: '600'
		};
		const cn = (this.props.visible) ? "search-bar-big" : "search-bar-big-hidden";
		return (
			<div className={cn}>
				<SearchBar 
					history={this.props.history} 
					location={this.props.location}
					menuStyle= {menuStyle}
					onSearch = {this.props.onSearch}/>
				<FaSearch size={45} style={{verticalAlign: 'bottom'}} onClick={() => this.props.onSearch(this.props.inputValue)}/>
			</div>
		)
	}
}

function mapStatetoProps(state) {
	return {
		inputValue: state.app.inputValue,
		visible: state.app.visible
	}
}

function mapDispatchtoProps(dispatch) {
	return {
		onSearch: bindActionCreators(actions.onSearch, dispatch),
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header)
