import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Header from './components/Header'
import { JobDetails } from './components/JobDetails'
import { Preview } from './components/Preview'
import InputForm from './components/InputForm'
import Footer from './components/Footer'

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
    this.setState({ message: 'Your application was submitted!' })
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
          <JobDetails data={this.state.data} />
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
