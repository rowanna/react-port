import React from 'react'
import Main from './routes/Main'
import About from './routes/About'
import Site from './routes/Site'
import Script from './routes/Script'
import Animation from './routes/Animation'
import Contact from './routes/Contact'
import { HashRouter, Route } from 'react-router-dom'
import './App.scss'


function App() {
  return (
    <HashRouter> 
      <Route path="/" exact={true} component={Main} />
      <Route path="/about" component={About} />
      <Route path="/site" component={Site} />
      <Route path="/script" component={Script} />
      <Route path="/animation" component={Animation} />
      <Route path="/contact" component={Contact} />
    </HashRouter>
  )
}

export default App;
