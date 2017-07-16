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
							thumbnail: data.items[0].snippet.thumbnails.default.url,
							channelTitle: data.items[0].snippet.channelTitle,
							viewCount: data.items[0].statistics.viewCount,
							date: data.items[0].snippet.publishedAt
			})
		)
	}

	render() {
		return (
			<div> 
				<img src={this.state.thumbnail}/>
				<p>{this.state.title}</p>
				<p>{this.state.channelTitle}</p>
				<p>{this.state.viewCount} views</p>
				<p>{timeSince(this.state.date)}</p>
			</div>
		)
	}
}