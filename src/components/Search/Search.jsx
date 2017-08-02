import React from 'react';
import {timeSince} from '../../utils/utils';
import {Link, Route} from 'react-router-dom';
import Waypoint from 'react-waypoint';


class Views extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			viewCount: ''
		}
	}

	componentDidMount() {
		this.getStatistics(this.props.id)
	}

	getStatistics(id) {
		fetch('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + id +'&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data => 
			this.setState({viewCount: data.items[0].statistics.viewCount})
		)
	}

	render() {
		return(
			<li>
				{parseInt(this.state.viewCount).toLocaleString('en')}
			</li>
		)
	}

}

export default class Search extends React.Component {
	constructor() {
		super()
		this.state = {
			results: [],
			loading: false
		}
	}

	componentDidMount() {
		const query = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
		fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=' + query + '&regionCode=us&type=video&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data => 
			this.setState({results: data.items,
							pageToken: data.nextPageToken
			})
		)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.location.pathname !== this.props.location.pathname) {
			const nextQuery = nextProps.location.pathname.substr(nextProps.location.pathname.lastIndexOf('/') + 1);
			fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=' + nextQuery + '&regionCode=us&type=video&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
			.then(response => response.json())
			.then(data => 
			this.setState({results: data.items,
							pageToken: data.nextPageToken
			})
		)
		}
	}

	infiniteLoad() {
		if (!this.state.loading && this.state.pageToken) {
			this.setState({loading: true});
			const currentQuery = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
			const currentResults = this.state.results
			fetch('https://www.googleapis.com/youtube/v3/search?pageToken=' + this.state.pageToken + '&part=snippet&maxResults=20&q=' + currentQuery + '&regionCode=us&type=video&key=AIzaSyC1U2ObFKJmvmDltBCA_M6S3xHS3lNo-pg')
				.then(response => response.json())
				.then(data =>
				this.setState({results: currentResults.concat(data.items),
								pageToken: data.nextPageToken,
								loading: false
				})
			)
		}
	}

	render() {
		return(
			<div className="results-list">
				{this.state.results.map((result, key) => {
					return (
						<div className="result" key={key}>
							<Link to={'/video/' + result.id.videoId}><img src={result.snippet.thumbnails.medium.url} className="result-thumbnail"/></Link>
							<h3 className="result-title">{result.snippet.title}</h3>
							<p className="result-channel">{result.snippet.channelTitle}</p>
							<ul className="vid-stats">
								<Views id={result.id.videoId}/>
								<li>{timeSince(result.snippet.publishedAt)}</li>
							</ul>
							<p className='result-description'>{result.snippet.description}</p>
						</div>
					);
				})}
				<Waypoint onEnter={this.infiniteLoad.bind(this)} threshold={2.0} />
			</div>
		)
	}
}
