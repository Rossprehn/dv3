import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { JobDetails } from './components/JobDetails'
import { InputForm } from './components/InputForm.js'
import { Preview } from './components/Preview.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      text: [],
      message: '',
      show: false
    }
  }

  componentDidMount() {
    this.getListing()
  }

  getListing = () => {
    return fetch('./listing.json')
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        })
      })
      .catch(error => console.log(error))
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({ message: 'Your application was submitted' })
  }

  previewToggle = () => {
    const onOrOff = !this.state.show
    this.setState({ show: onOrOff })
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <JobDetails Data={this.state.data} />
          <InputForm
            handleChange={this.handleChange}
            message={this.state.message}
            handleSubmit={this.handleSubmit}
            value={this.state.value}
          />
          <Preview
            previewToggle={this.previewToggle}
            show={this.state.show}
            text={this.state.text}
          />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
