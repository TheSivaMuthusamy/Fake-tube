import React from 'react';
import {MdPlayCircleOutline, MdPause} from 'react-icons/lib/md/';
import {FaSearch} from 'react-icons/lib/fa';
import {Link} from 'react-router-dom';

export default class Buttons extends React.Component {
	constructor() {
		super();
	}

	render() {
		return ( 
			<div className="button-container">
				{(this.props.playing) 
					? <MdPause onClick={this.props.onClick}/>
					: <MdPlayCircleOutline onClick={this.props.onClick}/>
				}
				<Link to={'/search/' + this.props.searchValue}><FaSearch className="return" size={35}/></Link>
			</div>
		)
	}
}