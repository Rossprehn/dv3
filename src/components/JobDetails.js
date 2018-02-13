import React from 'react'

export class JobDetails extends React.Component {
  render() {
    return (
      <section id="job-details">
        <h2>Job Details</h2>
        <h4>{this.props.data.title}</h4>
        <p>{this.props.data.description}</p>
      </section>
    )
  }
}
