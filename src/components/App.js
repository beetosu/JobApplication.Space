import React, {Component} from 'react'
import Job from './Job'
import Header from './Header'
import testData from './testData'
import staticData from './../staticData'

class App extends Component {
	constructor() {
		super()
		this.refilterJobs = this.refilterJobs.bind(this)
		this.state = {
			itemData: testData,
			jobs: testData.filter(job => staticData.isFiltered[job.status])
				.sort((a, b) => new Date(a.applied).getTime() > new Date(b.applied).getTime() ? -1 : 1)
				.map(job => <Job key={job.id} data={job} filtration={this.refilterJobs}/>)
		}
	}

	refilterJobs() {
		console.log("refiltered!")
		this.setState({
			jobs: testData.filter(job => staticData.isFiltered[job.status])
				.sort((a, b) => new Date(a.applied).getTime() > new Date(b.applied).getTime() ? -1 : 1)
				.map(job => <Job key={job.id} data={job} filtration={this.refilterJobs}/>)
		})
	}

	render() {
		return (
			<div className="App">
				<Header filtration={this.refilterJobs}/>
				<div className="Jobs">
					{this.state.jobs}
				</div>
			</div>
		);
	}
}

export default App;
