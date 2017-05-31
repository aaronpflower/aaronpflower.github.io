import 'normalize.css';
// import 'font-awesome/css/font-awesome.css';
import styles from './main.less'
import grid from 'flexboxgrid'

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './containers/home.container'
import About from './containers/about.container'
import Projects from './containers/projects.container'
import Skills from './containers/skills.container'
import Nav from './containers/nav.container'

const Routes = () => (
  <Router>
    <div className={styles.mainWrapper}>
      <Nav/>
      <div className={styles.content}>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/skills" component={Skills}/>
      </div>
    </div>
  </Router>
)

export default Routes
