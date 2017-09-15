import React from 'react';
import Autocomplete from 'react-autocomplete';
import JSONP from 'jsonp';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/header';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

class SearchBar extends React.Component {	
	constructor(props) {
		super(props);
		this._onKeyPress = this._onKeyPress.bind(this)
	}

	handleRenderItem(item, isHighlighted) {
		const listStyles = {
			item : {
				padding: '5px 0 5px 2px',
				cursor: 'default',
				color: '#eeeeee',
				background: '#121212',
			},

			highlightedItem: {
				padding: '5px 0 5px 2px',
				cursor: 'default',
				background: '#2a2a2a',
				color: '#70d9ff',
				overflow: 'hidden',
			}
			
		};

		return (
			<div style={isHighlighted ? listStyles.highlightedItem : listStyles.item}>
				{item}
			</div>
		)
	}

	_onKeyPress(event) {		
		if (event.keyCode == 13 && this.props.inputValue !== '' 
			&& this.refs.search.state.highlightedIndex == null) {
				this.props.onSearch(this.props.inputValue)
		}

	}

	render() {
		return (
			<Autocomplete
			ref = "search"
			items = {this.props.data}
			getItemValue = {(item) => item}
			inputProps={{ placeholder: 'Search ...', onKeyDown: this._onKeyPress}}
			value={this.props.inputValue}
			onChange={this.props.onChange}
			onSelect={this.props.onSearch}
			renderItem={this.handleRenderItem}
			menuStyle= {this.props.menuStyle}
			autoHighlight= {false}
			/>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(SearchBar)

