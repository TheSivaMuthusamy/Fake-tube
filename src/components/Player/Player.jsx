import React from 'react';
import YouTube from 'react-youtube';



export default class Player extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			windowHeight2x: window.innerHeight * 4,
      		playerCenterTop: (window.innerHeight * 4) / 2.665
		}
	}

	componentDidMount() {
		var final = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
		this.setState({
			id: final
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
      			disablekb: 1,
      			listType: "playlist"
      	}}
		return(
			<div className="videowrapper">
				<YouTube
		        	videoId={this.state.id}	
		        	opts={opts}	       	
		      	/>
		    </div>
		)
	}
}