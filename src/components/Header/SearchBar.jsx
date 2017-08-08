import React from 'react';
import Autocomplete from 'react-autocomplete';
import JSONP from 'jsonp';
import {push} from 'react-router-redux'

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

export default class SearchBar extends React.Component {	
	constructor(props) {
		super(props);
		this._onKeyPress = this._onKeyPress.bind(this)
	}

	handleRenderItem(item, isHighlighted) {
		const listStyles = {
			item : {
				padding: '5px',
				cursor: 'default',
				color: '#eeeeee',
				background: '#121212'
			},

			highlightedItem: {
				padding: '5px',
				cursor: 'default',
				background: '#2a2a2a',
				color: '#70d9ff',
				overflow: 'hidden'
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
				const query = '/search/' + this.props.inputValue.replace(/\s/g, '+');
				this.props.goto(query)
		}

	}

	render() {
		const menuStyle = {			
			minWidth: '402px'
		}
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
			menuStyle= {menuStyle}
			autoHighlight= {false}
			/>
		)
	}
}
