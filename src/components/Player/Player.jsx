import React from 'react';
import YouTube from 'react-youtube';
import Buttons from './Buttons';
import Slider from 'material-ui/Slider';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/player'; 


class Player extends React.Component {

	constructor() {
		super();
		this.state = {
			id: '',
		}
	}

	componentDidMount() {
		const final = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
		this.setState({
			id: final
		})
	}

	componentWillUnmount() {
		this.props.clearTime()
	}


	render() {
		const opts = {
			playerVars: {
        		autoplay: 1,
        		iv_load_policy: 3,
      			rel: 0,
      			controls: 0,
      			showinfo: 0,
      			disablekb: 0,
      			listType: "playlist",

      	}}

      	const styles = {
      		marginBottom: '0px',
      		marginRight: '30px',
      		marginLeft: '30px',
      		height: '10px',
      		borderRadius: '30px'
      	}
      	
		return(
			<div className="videowrapper">
				<YouTube
			        	videoId={this.state.id}	
			        	opts={opts}
			        	onReady={this.props.onReady}
			        	onPlay={this.props.onPlay}
			        	onPause={this.props.onPause}
			        	onStateChange={this.props.onPlayerStateChange}	       	
			      	/>
			     <div className="controls">
					<Slider min={0} max={100} value={this.props.difference} onChange={this.props.seekTo} style={styles}/>
			      	<Buttons playing={this.props.playing} onClick={this.props.togglePlay} />
			      </div>
		    </div>
		)
	}
}

function mapStateToProps(state) {
	return {
		playing: state.app.playing,
		difference: state.app.difference
	}
}

function mapDispatchtoProps(dispatch) {
	return {
		onReady: bindActionCreators(actions.onReady, dispatch),
		onPlay: bindActionCreators(actions.onPlay, dispatch),
		onPause: bindActionCreators(actions.onPause, dispatch),
		onPlayerStateChange: bindActionCreators(actions.onPlayerStateChange, dispatch),
		seekTo: bindActionCreators(actions.seekTo, dispatch),
		togglePlay: bindActionCreators(actions.togglePlay, dispatch),
		clearTime: bindActionCreators(actions.clearTime, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(Player)