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
		default: {
			return state
		}
	}
}