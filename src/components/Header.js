import React, {Component} from 'react'
import Filter from './Filter'
import Twemoji from './../Twemoji'

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<h1><Twemoji emoji="📝" /> JobApplication.Space <Twemoji emoji="📝" /> </h1>
				<Filter filtration={this.props.filtration}/>
			</div>
		);
	}
}

export default Header
