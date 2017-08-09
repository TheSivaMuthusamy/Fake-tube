import AppConstants from '../constants/AppConstants'

export default(state ={}, action) => {
	switch (action.type) {
		case(AppConstants.GET_INPUT): {
			return {
				...state,
				inputValue: action.event.target.value
			}
		}
		case(AppConstants.SET_SUGGESTIONS): {
			return {
				...state,
				data: action.data
			}
		}
		case(AppConstants.SET_VALUE) : {
			return {
				...state,
				inputValue: action.value,
				searchValue: action.value
			}
		}
		default: {
			return state
		}
	}
}