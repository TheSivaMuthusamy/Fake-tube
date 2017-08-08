import AppConstants  from '../constants/AppConstants';
import fetchJsonp from 'fetch-jsonp'

function getInput(event) {
	return {
		type: AppConstants.GET_INPUT,
		event
	}
}

function setSuggestions(data) {
	return {
		type: AppConstants.SET_SUGGESTIONS,
		data
	}
}

export function onChange(event) {
	return function (dispatch) {
		dispatch(getInput(event))
		dispatch(getSuggestions(event))
	}
}

function getSuggestions(event) {
	return function (dispatch) {
		if (event.target.value !== '') {
			const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';
			const query = event.target.value;
			const url = googleAutoSuggestURL + query;
			fetchJsonp(url)
				.then(function(response) {
					return response.json()
				})
				.then(function(json) {
			    	var searchResults, retrievedSearchTerms;
			    	searchResults = json[1];
			    	retrievedSearchTerms = searchResults.map(function(result) {
						return result[0];
					});
					return retrievedSearchTerms
			 	})
			 	.then(function(data) {
			 		dispatch(setSuggestions(data))
			 	})
		}
	}
}



