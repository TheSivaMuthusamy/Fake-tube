import AppConstants  from '../constants/AppConstants';

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