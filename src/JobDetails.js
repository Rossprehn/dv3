import React from 'react'

export class JobDetails extends React.Component {
  render() {
    return (
      <section id="job-details">
        <h2>Job Details</h2>
        <h4>{this.props.jobData.title}</h4>
        <p>{this.props.jobData.description}</p>
      </section>
    )
  }
}
