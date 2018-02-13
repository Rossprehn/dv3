import React from 'react'

export class Preview extends React.Component {
  render() {
    return (
      <div>
        <p id="message">&nbsp;</p>
        <button id="preview-toggle" onClick={this.props.previewToggle}>
          Show Preview
        </button>
        <section id="application-preview" className={this.props.show ? '' : 'hidden'}>
          {this.props.text}
        </section>
      </div>
    )
  }
}
