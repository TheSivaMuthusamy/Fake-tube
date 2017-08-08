import AppConstants from '../constants/AppConstants'

export default(state ={}, action) => {
	switch (action.type) {
		case(AppConstants.GET_INPUT): {
			return state.set('app', inputValue: action.event.target.value)
		}
		case(AppConstants.SET_SUGGESTIONS): {
			return state.set('app', data: action.data)			
		}
		default: {
			return state
		}
	}
}