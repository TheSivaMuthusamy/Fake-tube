import React from 'react';
import {timeSince} from '../../utils/utils';
import Waypoint from 'react-waypoint';
import {Link, Route} from 'react-router-dom';
import Player from '../Player/Player';

export default class Video extends React.Component {
	constructor() {
		super();
		this.state = {
			vids: [],
			loading: false,
		}
	}

	componentDidMount() {
		fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data => 
			this.setState({vids: data.items,
							pageToken: data.nextPageToken
			})
		)
	}

	infiniteLoad() {
		if (!this.state.loading && this.state.pageToken) {
			this.setState({loading: true});
			const currentVids = this.state.vids
			fetch('https://www.googleapis.com/youtube/v3/videos?pageToken=' + this.state.pageToken + '&part=snippet%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
				.then(response => response.json())
				.then(data =>
				this.setState({vids: currentVids.concat(data.items),
								pageToken: data.nextPageToken,
								loading: false
				})
			)
		}
	}

	render() {
		return (
			<div className="vid-grid">
				{this.state.vids.map((vid, key) =>  {
					return (
						<div className="vid" key={key}> 
							<Link to={'/video/' + vid.id}><img src={vid.snippet.thumbnails.medium.url} className="thumbnail"/></Link>
							<h3 className="vid-title"><Link to={'/video/' + vid.id}>{vid.snippet.title}</Link></h3>
							<p className="vid-channel">{vid.snippet.channelTitle}</p>
							<ul className="vid-stats">
								<li>{parseInt(vid.statistics.viewCount).toLocaleString('en')} views</li>
								<li>{timeSince(vid.snippet.publishedAt)}</li>
							</ul>
						</div>
					);
				})}
				<Waypoint onEnter={this.infiniteLoad.bind(this)} threshold={2.0} />
			</div>
		)
	}
}