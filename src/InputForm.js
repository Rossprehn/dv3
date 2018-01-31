import React from 'react'

export class InputForm extends React.Component {
  state = { formClass: 'pending' }
  submitHandler(event) {
    event.preventDefault()
    this.setState({ results: 'Your application was submitted!', formClass: 'succes s' })
    //   document.querySelector('#message').textContent = '!'
    //   document.querySelector('#application-preview').classList.add('hidden')
    //   document.querySelector('#application-preview').textContent = ''
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
