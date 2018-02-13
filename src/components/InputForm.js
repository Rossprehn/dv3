import React from 'react'

export default class InputForm extends React.Component {
  render() {
    console.log(this.props.message)
    return (
      <form id="application-input">
        <label>Apply Here: </label>
        <textarea
          id="application-text"
          rows="8"
          cols="100"
          value={this.props.value}
          onChange={e => this.props.handleChange(e)}
        />
        <input id="submit" type="submit" value="Submit" onClick={e => this.props.handleSubmit(e)} />
        <p id="message">{this.props.message}</p>
      </form>
    )
  }
}
