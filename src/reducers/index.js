import header from './header';
import player from './player';
import video from './video';
import search from './search';
import dashboard from './dashboard'

const reducers = [
	header,
	video,
	search,
	player,
	dashboard
]

export default (state, action) => {
    return reducers.reduce((currentState, reducer) => {
        return reducer(currentState, action);
    }, state);
};