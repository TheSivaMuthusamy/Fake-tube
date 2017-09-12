import AppConstants  from '../constants/AppConstants';
import {fetchVideos} from './video'

export function hideDash(event) {
	return {
		type: AppConstants.HIDE_DASH
	}
}

export function revealDash(event) {
	return {
		type: AppConstants.REVEAL_DASH
	}
}

export function changeCategory(value) {
	return function(dispatch) {
		dispatch(setCategory(value)),
		dispatch(fetchCategory(value))
	}
}

function switchVideos(data) {
	return {
		type: AppConstants.SWITCH_VIDEOS,
		data
	}
}

function fetchCategory(category = '0', pageToken = '') {
	return function(dispatch) {
		fetch('https://www.googleapis.com/youtube/v3/videos?pageToken=' + pageToken + '&part=snippet%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=' + category +'&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data => 
			dispatch(switchVideos(data))
		)
	}
}

function setCategory(value) {
	return {
		type: AppConstants.SET_CATEGORY,
		value
	}
}