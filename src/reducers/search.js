import AppConstants  from '../constants/AppConstants';

export default(state ={}, action) => {
	switch (action.type) {
		case(AppConstants.MORE_ITEMS): {
			return {
				...state,
				videos: {
					...state.videos,
					search: state.videos.search.concat(action.data.items)
				},
				pageToken: {
					...state.pageToken,
					search: action.data.nextPageToken
				}
			}
		}
		case(AppConstants.SET_SEARCH): {
			return {
				...state,
				videos: {
					...state.videos,
					search: action.data.items
				},
				pageToken: {
					...state.pageToken,
					search: action.data.nextPageToken
				}
			}
		}
		default: {
			return state
		}
	}
}