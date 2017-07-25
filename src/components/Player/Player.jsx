import React from 'react';
import YouTube from 'react-youtube';
import Buttons from  './Buttons';

export default class Player extends React.Component {

	constructor() {
		super();
		this.state = {
			id: '',
			windowHeight2x: window.innerHeight * 4,
      		playerCenterTop: (window.innerHeight * 4) / 2.665
		}
	}

	componentDidMount() {
		fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
		.then(response => response.json())
		.then(data =>
		this.setState({id: data.items[0].id})
		)
	}

	_onReady(event) {
    // access to player in all event handlers via event.target 
    event.target.pauseVideo();
  }

	render() {
		const opts = {
			playerVars: {
        		autoplay: 1,
        		iv_load_policy: 3,
      			rel: 0,
      			controls: 0,
      			showinfo: 0,
      			disablekb: 1,
      			listType: "playlist"
      	}}
		return(
			<div className="videowrapper">
				<YouTube
		        	videoId={this.state.id}	
		        	opts={opts}	
		        	onReady={this._onReady}        	
		      	/>
		      	<Buttons />
		    </div>
		)
	}
}