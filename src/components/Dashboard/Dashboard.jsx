import React from 'react';
import SearchBar from '../Header/SearchBar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as headerActions from '../../actions/header';
import * as actions from '../../actions/dashboard';
import * as videoActions from '../../actions/video';
import * as searchActions from '../../actions/search'
import {FaArrowCircleOLeft, FaArrowCircleORight, FaSearch} from 'react-icons/lib/fa/';

class Dashboard extends React.Component {
	
	constructor() {
		super();
	}

	switchSearch(value) {
		if (!(this.props.location.pathname).includes('video')) {
			this.props.onSearch(value)
		} else {
			this.props.fetchNewSearch(value)
		}
	}
	
	render() {
		const cn = (this.props.visible) ? 'dashboard' : 'dashboard-hidden';
		const menuStyle = {			
			minWidth: '250px',
			width: '250px',
			position: 'absolute',
			zIndex: '99',
			fontSize: '16px',
			fontWeight: '600'
		};
		return (
			<div>
				<FaArrowCircleORight className="revealButton" size={40} style={{verticalAlign: '-0.9em'}} onClick={this.props.revealDash}/>
				<ul className={cn}>
					<li className="logo initial">
						<h1>Fake-tube</h1>
						<FaArrowCircleOLeft size={40} style={{verticalAlign: '-0.9em'}} onClick={this.props.hideDash}/>
					</li>
					<li className="search-bar initial">
						<SearchBar 
							history={this.props.history} 
							location={this.props.location}
							menuStyle = {menuStyle}
							onSearch = {this.switchSearch.bind(this)}/>
						<FaSearch size={20} onClick={this.switchSearch.bind(this)}/>
					</li>
					<li className="categories" onClick={() => this.props.changeCategory('0')}>Most Popular</li>
					<li className="categories" onClick={() => this.props.changeCategory('27')}>Education</li>
					<li className="categories" onClick={() => this.props.changeCategory('17')}>Sports</li>
					<li className="categories" onClick={() => this.props.changeCategory('28')}>Technology</li>
					<li className="categories" onClick={() => this.props.changeCategory('23')}>Comedy</li>
					<li className="categories" onClick={() => this.props.changeCategory('10')}>Music</li>
					<li className="categories" onClick={() => this.props.changeCategory('20')}>Gaming</li>
					<hr/>
					{this.props.shortSearch.map((vid, key) =>  {
					return (
						<li className="short" key={key}> 
							<a href={'#/video/' + vid.id.videoId} onClick={() => this.props.clickVideo(vid.id.videoId)}><img src={vid.snippet.thumbnails.medium.url} className="thumbnail"/></a>
							<h3 className="vid-title"><a href={'#/video/' + vid.id.videoId} onClick={() => this.props.clickVideo(vid.id.videoId)}>>{vid.snippet.title}</a></h3>
							<p className="vid-channel">{vid.snippet.channelTitle}</p>
						</li>
					);
				})}
				</ul>
			</div>
		)
	}
}

function mapStatetoProps(state) {
	return {
		inputValue: state.app.inputValue,
		value: state.app.searchValue,
		visible: state.app.visible,
		shortSearch: state.app.videos.shortSearch,
		id: state.app.videos.id
	}
}

function mapDispatchtoProps(dispatch) {
	return {
		onSearch: bindActionCreators(headerActions.onSearch, dispatch),
		hideDash: bindActionCreators(actions.hideDash, dispatch),
		revealDash: bindActionCreators(actions.revealDash, dispatch),
		changeCategory: bindActionCreators(actions.changeCategory, dispatch),
		clickVideo: bindActionCreators(videoActions.clickVideo, dispatch),
		fetchNewSearch: bindActionCreators(searchActions.fetchNewSearch, dispatch)
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Dashboard)