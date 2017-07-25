import React from 'react';
import YouTube from 'react-youtube';

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

	render() {
		return(
			<div className="videowrapper">
				<YouTube
		        	videoId={this.state.id}		        	
		      	/>
		    </div>
		)
	}
}