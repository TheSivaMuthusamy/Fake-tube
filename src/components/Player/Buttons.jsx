import React from 'react';
import {MdPlayCircleOutline, MdPause} from 'react-icons/lib/md/';



export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return ( 
			<div className="button-container">
				{(this.props.playing) 
					? <MdPause onClick={this.props.onClick}/>
					: <MdPlayCircleOutline onClick={this.props.onClick}/>
				}
			</div>
		)
	}
}