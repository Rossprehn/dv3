import React from 'react'

export class InputForm extends React.Component {
  state = { formClass: 'pending' }

  submitHandler = event => {
    event.preventDefault()
    const application = event.target.querySelector('#application-text')
    this.props.submitMessage(application.value)
  }

  render() {
    return (
      <form id="application-input" className={this.state.formClass} onSubmit={this.submitHandler}>
        <label>{this.state.results}</label>
        <label>Apply Here: </label>
        <textarea id="application-text" rows="8" cols="100" />
        <input id="submit" type="submit" value="Submit" />
      </form>
    )
  }
}
