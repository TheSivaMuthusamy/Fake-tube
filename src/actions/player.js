import AppConstants from '../constants/AppConstants';

let setPlayerTimer = null

export function onReady(event) {
	return {
		type: AppConstants.PLAYER_ON_READY,
		event
	}
}

export function onPlay(event) {
	return {
		type: AppConstants.PLAYER_PLAY
	}
}

export function onPause(event) {
	return {
		type: AppConstants.PLAYER_PAUSE
	} 
}

export function onPlayerStateChange(event) {
	if (event.data == 1) {
		return dispatch => {
			dispatch(playerOnTimeAsync())
		}
	} else {
		clearInterval(setPlayerTimer)
		return dispatch => {
			dispatch(treadWater())
		}
	}
}

function playerOnTimeAsync(time = 100) {
	return dispatch => {
		setPlayerTimer=setInterval(() => {
			dispatch(playerTime())
		}, time)
	}
}

function treadWater() {
	return {
		type: treadWater
	}
}

function playerTime() {
	return {
		type: AppConstants.PLAYER_TIME
	}
}

export function seekTo(event, value) {
	return {
		type: AppConstants.PLAYER_SEEK_TO,
		event,
		value
	}
}

export function togglePlay(event) {
	return {
		type: AppConstants.TOGGLE_PLAY,
		event
	}
}

export function clearTime() {
	clearInterval(setPlayerTimer)
	return {
		type: AppConstants.CLEAR_TIME
	}
}

