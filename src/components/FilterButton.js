import React, {Component} from 'react'
import staticData from './../staticData'
import Twemoji from './../Twemoji'

class FilterButton extends Component {
	constructor() {
		super()
		this.state = {}
		this.alterState = this.alterState.bind(this)
	}

	alterState() {
		staticData.isFiltered[this.state.action] = !staticData.isFiltered[this.state.action]
		this.setState({
			stylesheet: {
				backgroundColor: staticData.isFiltered[this.props.name] ?
					staticData.stylesheet[this.props.name].backgroundColor :
					"#cccccc"
			}
		})
		this.props.filtration()
		console.log(staticData.isFiltered[this.state.action])
	}

	componentDidMount() {
		this.setState({
			action: this.props.name,
			stylesheet: {
				backgroundColor: staticData.isFiltered[this.props.name] ?
					staticData.stylesheet[this.props.name].backgroundColor :
					"#cccccc"
			}
		})
	}

	render() {
		return (
			<button className="filterButton" style={this.state.stylesheet} onClick={() => this.alterState()}> <Twemoji emoji={staticData.emojis[this.state.action]} /> {this.state.action}</button>
		)
	}

}

export default FilterButton
