import React from 'react';
import Autocomplete from 'react-autocomplete';
import JSONP from 'jsonp';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

export default class SearchBar extends React.Component {	
	constructor(props) {
		super(props);
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

	onSearch(value) {
		this.setState({inputValue: value})
		const query = '/search/' + value.replace(/\s/g, '+');
		this.props.history.push(query)
	}

	_onKeyPress(event) {		
		if (event.keyCode == 13 && this.state.inputValue !== '' 
			&& this.refs.search.state.highlightedIndex == null) {
				this.onSearch(this.props.inputValue)
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
			onSelect={this.onSearch}
			renderItem={this.handleRenderItem}
			menuStyle= {menuStyle}
			autoHighlight= {false}
			/>
		)
	}
}
