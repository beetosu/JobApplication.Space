import React, {Component} from 'react'
import FilterButton from './FilterButton'

class Filter extends Component {
	render() {
		const buttons = [
			"Applied",
			"Rejected",
			"Interviewing",
			"Offer"
		]
		const filterButtons = buttons.map(button => <FilterButton key={button} name={button} filtration={this.props.filtration}/>)
		return (
			<div>
				{filterButtons}
			</div>
		)
	}
}

export default Filter
