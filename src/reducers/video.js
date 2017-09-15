import AppConstants from '../constants/AppConstants'

export default(state ={}, action) => {
	switch (action.type) {
		case(AppConstants.SET_VIDEOS): {
			return {
				...state,
				videos: {
					...state.videos,
					grid: state.videos.grid.concat(action.data.items)
				},
				pageToken: {
					...state.pageToken,
					grid: action.data.nextPageToken
				}
			}
		}
		case(AppConstants.SET_ID): {
			return {
				...state,
				videos: {
					...state.videos,
					id: action.id
				}
			}
		}
		default: {
			return state
		}
	}
}