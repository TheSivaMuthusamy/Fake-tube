import AppConstants  from '../constants/AppConstants';
import {setValue} from './header'

export function fetchSearch(query, pageToken = '') {
	return function(dispatch) {
		fetch('https://www.googleapis.com/youtube/v3/search?pageToken=' + pageToken + '&part=snippet&maxResults=20&q=' + query + '&regionCode=us&type=video&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data => 
			dispatch(moreItems(data))
		)
	}
}

export function fetchNewSearch(query, pageToken = '') {
	return function(dispatch) {
		fetch('https://www.googleapis.com/youtube/v3/search?pageToken=' + pageToken + '&part=snippet&maxResults=20&q=' + query + '&regionCode=us&type=video&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data =>
			dispatch(setSearch(data)),
			dispatch(setValue(query))
		)
	}
}

function setSearch(data, query) {
	return {
		type: AppConstants.SET_SEARCH,
		data
	}
}

function moreItems(data) {
	return {
		type: AppConstants.MORE_ITEMS,
		data
	}
}