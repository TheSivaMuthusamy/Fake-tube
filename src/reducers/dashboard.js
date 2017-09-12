import AppConstants from '../constants/AppConstants'

export default(state ={}, action) => {
	switch (action.type) {
		case(AppConstants.HIDE_DASH): {
			return {
				...state,
				visible: false
			}
		}
		case(AppConstants.REVEAL_DASH): {
			return {
				...state,
				visible: true
			}
		}
		case(AppConstants.SET_CATEGORY): {
			return {
				...state,
				category: action.value
			}
		}
		case(AppConstants.SWITCH_VIDEOS): {
			return {
				...state,
				videos: {
					...state.videos,
					grid: action.data.items
				},
				pageToken: {
					...state.pageToken,
					grid: action.data.nextPageToken
				}
			}
		}
		default: {
			return state
		}
	}
}