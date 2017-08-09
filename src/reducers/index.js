import header from './header';
import player from './player';
import video from './video';

const reducers = [
	header,
	video
]

export default (state, action) => {
    return reducers.reduce((currentState, reducer) => {
        return reducer(currentState, action);
    }, state);
};