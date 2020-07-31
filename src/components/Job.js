import React, {Component} from 'react'
import staticData from "./../staticData"
import Twemoji from "./../Twemoji"

class Job extends Component {
	constructor() {
		super()
		this.state = {
			bodyStylesheet: {},
			buttonStylesheet: {},
			isHovered: false
		}
		this.alterState = this.alterState.bind(this)
		this.alterText = this.alterText.bind(this)
		this.alterHoverState = this.alterHoverState.bind(this)
	}

	componentDidMount() {
		this.setState({
			status: this.props.data.status,
			buttons: staticData.actions[this.props.data.status].map(butt => <button key={butt} style={staticData.buttonStylesheet[this.props.data.status]} onClick={(e) => this.alterState(butt, e)}>{butt}</button>),
			company: this.props.data.company,
			title: this.props.data.job_title,
			location: this.props.data.location,
			bodyStylesheet: staticData.stylesheet[this.props.data.status],
			buttonStylesheet: staticData.buttonStylesheet[this.props.data.status]
		})
	}

	alterState(event) {
		this.setState({
			status: staticData.conversions[event],
			buttons: staticData.actions[staticData.conversions[event]].map(butt => <button style={staticData.buttonStylesheet[staticData.conversions[event]]} key={butt} onClick={(e) => this.alterState(butt, e)}>{butt}</button>),
			bodyStylesheet: staticData.stylesheet[staticData.conversions[event]],
			buttonStylesheet: staticData.buttonStylesheet[this.props.data.status]
		})
		this.props.filtration()
	}

	alterText(event) {
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	alterHoverState(event) {
		const type = event.type
		this.setState({
			isHovered: type === "mouseenter"
		})
	}

	render() {
		return (
			<form className="job" style={this.state.bodyStylesheet} onMouseEnter={this.alterHoverState} onMouseLeave={this.alterHoverState}>
				<div className="jobHead">
					<p>
						<input
							type="text"
							name="company"
							value={!!(this.state.company)?this.state.company:""}
							style={{width: !!(this.state.company) ?
								(this.state.company.length * (.6)).toString() + "em" :
								this.state.isHovered ?(7*.6).toString() + "em" : "0px",
								visibility: this.state.isHovered || !!(this.state.company) ? "visible" : "hidden"}}
							onChange={this.alterText}
							placeholder="Company"
							/>
						{!!(this.state.location) && !!(this.state.company) ? "(" : ""}
						<input
							type="text"
							name="location"
							value={!!(this.state.location)?this.state.location:""}
							style={{width: !!(this.state.location)?
								(this.state.location.length * (.55)).toString() + "em" :
								(8*.6).toString() + "em",
								visibility: this.state.isHovered || !!(this.state.location) ? "visible" : "hidden"}}
							onChange={this.alterText}
							onMouseOver={this.onHover}
							placeholder="Location"
						/>
						{!!(this.state.location) && !!(this.state.company) ? ")" : ""}
					</p>
				</div>
				<div className="jobBody">
					<Twemoji emoji={staticData.emojis[this.state.status]} /> {" "}
					<input
						type="text"
						name="title"
						value={this.state.title == null ? "Loading..." : this.state.title}
						onChange={this.alterText}/>
				</div>
				<div className="jobActions">
					{this.state.buttons}
				</div>
			</form>
		)
	}
}

export default Job
