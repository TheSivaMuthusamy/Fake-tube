import React from 'react';
import {timeSince} from '../../utils/utils';

export default class Video extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			thumbnail: '',
			channelTitle: '',
			viewCount: ''
		}
	}

	componentDidMount() {

		fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data => 
			this.setState({title: data.items[0].snippet.title,
							thumbnail: data.items[0].snippet.thumbnails.medium.url,
							channelTitle: data.items[0].snippet.channelTitle,
							viewCount: parseInt(data.items[0].statistics.viewCount),
							date: data.items[0].snippet.publishedAt
			})
		)
	}

	render() {
		return (
			<div className="vid"> 
				<img src={this.state.thumbnail} className="thumbnail"/>
				<h3 className="vid-title">{this.state.title}</h3>
				<p className="vid-channel">{this.state.channelTitle}</p>
				<ul className="vid-stats">
					<li>{this.state.viewCount.toLocaleString('en')} views</li>
					<li>{timeSince(this.state.date)}</li>
				</ul>
			</div>
		)
	}
}