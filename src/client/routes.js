import 'normalize.css';
import styles from './main.less'
import grid from 'flexboxgrid'

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './containers/home.container'
import About from './containers/about.container'
import Projects from './containers/projects.container'
import Header from './containers/header.container'

const Routes = () => (
  <Router>
    <div className={styles.mainWrapper}>
      <Header/>
      <div className={styles.content}>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
      </div>
    </div>
  </Router>
)

export default Routes
