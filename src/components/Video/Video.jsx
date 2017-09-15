import React from 'react';
import {timeSince} from '../../utils/utils';
import Waypoint from 'react-waypoint';
import {Link, Route} from 'react-router-dom';
import Player from '../Player/Player';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/video';

class Video extends React.Component {
	constructor() {
		super();
		this.state = {
			loading: false,
		}
	}

	componentDidMount() {
		this.props.fetchVideos(this.props.category)
	}

	infiniteLoad() {
		if (!this.state.loading && this.props.pageToken) {
			this.setState({loading: true});
			this.props.fetchVideos(this.props.category, this.props.pageToken)
			this.setState({loading: false})
		}
	}

	render() {
		const cn = (this.props.visible) ? 'vid-grid' : 'vid-grid-hidden';
		return (
			<div className={cn}>
				{this.props.videos.map((vid, key) =>  {
					return (
						<div className="vid" key={key}> 
							<a href={'#/video/' + vid.id} onClick={() => this.props.clickVideo(vid.id)}><img src={vid.snippet.thumbnails.medium.url} className="thumbnail"/></a>
							<h3 className="vid-title"><a href={'#/video/' + vid.id} onClick={() => this.props.clickVideo(vid.id)}>>{vid.snippet.title}</a></h3>
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

function mapStateToProps(state) {
	return {
		videos: state.app.videos.grid,
		pageToken: state.app.pageToken.grid,
		visible: state.app.visible,
		category: state.app.category
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchVideos: bindActionCreators(actions.fetchVideos, dispatch),
		clickVideo: bindActionCreators(actions.clickVideo, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)
