import AppConstants from '../constants/AppConstants';

export default(state ={}, action) => {
	switch (action.type) {
		case(AppConstants.PLAYER_ON_READY): {
			return {
				...state,
				player: action.event.target
			}
		}
		case(AppConstants.PLAYER_PLAY): {
			return {
				...state,
				playing: true
			}
		}
		case(AppConstants.PLAYER_PAUSE): {
			return {
				...state,
				playing: false
			}
		} 
		case(AppConstants.TOGGLE_PLAY): {
			var playState = state.player.getPlayerState()
    		playState == 1 ? state.player.pauseVideo() : state.player.playVideo()

    		return state
		}
		case(AppConstants.PLAYER_SEEK_TO): {
			const getPlayTime = (state.player.getDuration() / 100) * action.value
			state.player.seekTo(getPlayTime)

			return {
				...state,
				difference: action.value
			}
		}
		case(AppConstants.PLAYER_TIME): {
			if(state.player.getVideoLoadedFraction() > 0) {
		  		const playerTotalTime = state.player.getDuration()
		    	const playerCurrentTime = state.player.getCurrentTime()
		    	const playerTimeDifference = (playerCurrentTime / playerTotalTime) * 100
		    	return {
		    		...state,
		    		difference: playerTimeDifference
		    	}
		    } else {
		    	return state
		    }
		}
		case(AppConstants.CLEAR_TIME): {
			return {
		    		...state,
		    		difference: 0,
		    	}
		}
		default: {
			return state
		}
	}
}