import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { JobDetails } from './JobDetails'
import { InputForm } from './InputForm.js'
import { Preview } from './Preview.js'
import logo from './logo.svg'
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

  render() {
    return (
      <div>
        <Header />
        <main>
          <JobDetails jobData={this.state.data} />
          <InputForm />
          <preview />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
