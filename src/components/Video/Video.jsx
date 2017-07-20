import React from 'react';
import {timeSince} from '../../utils/utils';

export default class Video extends React.Component {
	constructor() {
		super();
		this.state = {
			vids: [] 
		}
	}

	componentDidMount() {

		fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data => 
			this.setState({vids: data.items})
		)
	}

	render() {
		return (
			<div className="vid-grid">
				{this.state.vids.map((vid, key) =>  {
					return (
						<div className="vid" key={key}> 
							<img src={vid.snippet.thumbnails.medium.url} className="thumbnail"/>
							<h3 className="vid-title">{vid.snippet.title}</h3>
							<p className="vid-channel">{vid.snippet.channelTitle}</p>
							<ul className="vid-stats">
								<li>{parseInt(vid.statistics.viewCount).toLocaleString('en')} views</li>
								<li>{timeSince(vid.snippet.publishedAt)}</li>
							</ul>
						</div>
					);
				})}
			</div>
		)
	}
}