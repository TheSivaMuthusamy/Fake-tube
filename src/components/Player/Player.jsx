import React from 'react';
import YouTube from 'react-youtube';
import Buttons from './Buttons';
import Slider from 'material-ui/Slider';
import Button from 'react-md/lib/Buttons/Button';


export default class Player extends React.Component {

	constructor() {
		super();
		this.state = {
			playing: false,
			id: '',
			windowHeight2x: window.innerHeight * 4,
      		playerCenterTop: (window.innerHeight * 4) / 2.665,
      		difference: 0
		}
	}

	componentDidMount() {
		const final = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
		this.setState({
			id: final
		})
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	_onPlay(event) {
   		this.setState({
   			playing: true
   		})
   		this.interval = setInterval(this.getTime.bind(this), 100)
  	}

  	_onPause(event) {
  		this.setState({
  			playing: false
  		})
  	}

  	_onReady(event) {
  		this.setState({
  			player: event.target
  		})
  		
  	}

  	getTime() {
  		var self = this;
  		if(self.state.player.getVideoLoadedFraction() > 0) {
		  		const playerTotalTime = self.state.player.getDuration()
		    	const playerCurrentTime = self.state.player.getCurrentTime()
		    	const playerTimeDifference = (playerCurrentTime / playerTotalTime) * 100
		    	self.setState({
		    		difference: playerTimeDifference
		    	})
	    }
  	}

  	handleClick(event) {
  		if (this.state.player.getPlayerState() == 1) {
  			this.state.player.pauseVideo()
  			this.setState({
  				playing: false
  			})
  		} else {
  			this.state.player.playVideo()
  			this.setState({
  				playing: true
  			})
  		}
  	}

  	seekTo(event, value) {
  		const getPlayTime = (this.state.player.getDuration() / 100) * value
  		this.state.player.seekTo(getPlayTime)
  		this.setState({
  				difference: value
  			})
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
      			listType: "playlist"
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
			        	onReady={this._onReady.bind(this)}
			        	onPlay={this._onPlay.bind(this)}
			        	onPause={this._onPause.bind(this)}	       	
			      	/>
			     <div className="controls">
					<Slider min={0} max={100} value={this.state.difference} onChange={this.seekTo.bind(this)} style={styles}/>
			      	<Buttons playing={this.state.playing} onClick={this.handleClick.bind(this)} />
			      </div>
		    </div>
		)
	}
}