import React from 'react';
import utils from '../../utils/utils';

export default class Video extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			thumbnail: '',
			channelTitle: '',
			viewCount: ''
		}
		this.formatDate = this.formatDate.bind(this);	
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

	formatDate() {
		
	  	var date = new Date(this.state.date)

		var seconds = Math.floor((new Date() - date) / 1000);

	  	var interval = Math.floor(seconds / 31536000);

	  	if (interval > 1) {
	    	return interval + " years ago";
	  	}
	  	interval = Math.floor(seconds / 2592000);
	  	if (interval > 1) {
	    	return interval + " months ago";
	  	}
	  	interval = Math.floor(seconds / 86400);
	  	if (interval > 1) {
	    	return interval + " days ago";
	  	}
	  	interval = Math.floor(seconds / 3600);
	  	if (interval > 1) {
	    	return interval + " hours ago";
	  	}
	  	interval = Math.floor(seconds / 60);
	  	if (interval > 1) {
	    	return interval + " minutes ago";
	  	}
	  	return Math.floor(seconds) + " seconds ago";
	}

	render() {
		return (
			<div> 
				<img src={this.state.thumbnail}/>
				<p>{this.state.title}</p>
				<p>{this.state.channelTitle}</p>
				<p>{this.state.viewCount} views</p>
				<p>{this.formatDate()}</p>
			</div>
		)
	}
}