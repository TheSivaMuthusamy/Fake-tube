import AppConstants from '../constants/AppConstants'

export function setVideos(data) {
	return {
		type: AppConstants.SET_VIDEOS,
		data
	}
}


export function fetchVideos(category = '0', pageToken = '') {
	return function(dispatch) {
		fetch('https://www.googleapis.com/youtube/v3/videos?pageToken=' + pageToken + '&part=snippet%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=' + category +'&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data => 
			dispatch(setVideos(data))
		)
	}
}

export function clickVideo(id) {
	return {
		type: AppConstants.SET_ID,
		id
	}
}