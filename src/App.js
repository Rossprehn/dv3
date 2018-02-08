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
      data: {}
    }
  }

  componentDidMount() {
    fetch('./listing.json')
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        })
      })
      .catch(err => console.log(err))
  }

  submitMessage = message => {
    this.setState({ message, results: 'Your application was submitted!', formClass: 'success' })
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <JobDetails jobData={this.state.data} />
          <InputForm submitMessage={this.submitMessage} />
          <Preview submitMessage={this.submitMessage} message={this.state.message} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
