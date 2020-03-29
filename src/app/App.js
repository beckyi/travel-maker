import React from 'react'
// import logo from './logo.svg'
// import '../App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import { Landing } from './components/Landing'
import { Landing, Header, MainBoard } from './components'

require('../App.css')

function App () {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route path='/main' component={MainBoard} />
        </Switch>
      </Router>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default App
