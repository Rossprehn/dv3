import React from 'react'

export class Preview extends React.Component {
  clickHandler(event) {
    event.preventDefault()
    const section = event.target
  }
  render() {
    return (
      <form>
        <div>
          <p id="message">{this.props.message}</p>
          <button id="preview-toggle" onClick={this.clickHandler}>
            Show Preview
          </button>
          <section id="application-preview" className="hidden" />
        </div>
      </form>
    )
  }
}
