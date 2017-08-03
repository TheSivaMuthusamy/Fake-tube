import React from 'react';
import Autocomplete from 'react-autocomplete';
import JSONP from 'jsonp';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

export default class SearchBar extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			data: [],
		}
		this.onHandleInput = this.onHandleInput.bind(this);
		this.handleRenderItem = this.handleRenderItem.bind(this);
		this.onSearch = this.onSearch.bind(this);
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

	onHandleInput(event) {
		const query = event.target.value
		const self = this
		const url  = googleAutoSuggestURL + query;

		this.setState({
			inputValue: event.target.value
		})

		if(query !== '') {
			JSONP(url, function(error, data) {
				var searchResults, retrievedSearchTerms;
				
				if(error) return error;

				searchResults = data[1];

				retrievedSearchTerms = searchResults.map(function(result) {
					return result[0];
				});

				self.setState({
					data: retrievedSearchTerms
				});
			});
		};

	}

	onSearch(value) {
		this.setState({inputValue: value})
		const query = '/search/' + value.replace(/\s/g, '+');
		this.props.history.push(query)
	}

	_onKeyPress(event) {		
		if (event.keyCode == 13 && this.state.inputValue !== '' 
			&& this.refs.search.state.highlightedIndex == null) {
				this.onSearch(this.state.inputValue)
		}

	}

	render() {
		const menuStyle = {			
			minWidth: '402px'
		}
		return (
			<Autocomplete
			ref = "search"
			items = {this.state.data}
			getItemValue = {(item) => item}
			inputProps={{ placeholder: 'Search ...', onKeyDown: this._onKeyPress}}
			value={this.state.inputValue}
			onChange={this.onHandleInput}
			onSelect={this.onSearch}
			renderItem={this.handleRenderItem}
			menuStyle= {menuStyle}
			autoHighlight= {false}
			/>
		)
	}
}