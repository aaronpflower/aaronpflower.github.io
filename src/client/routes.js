import 'normalize.css';
import styles from './main.less'
import grid from 'flexboxgrid'

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import configureStore from './store/configureStore'

import Home from './containers/home.container'
import About from './containers/about.container'
import Projects from './containers/projects.container'
import Blog from './containers/blog.container'
import Header from './containers/header.container'

let store = configureStore()
const Routes = () => (
  <Provider store={store}>
    <Router>
      <div className={styles.mainWrapper}>
        <Header/>
        <div className={styles.content}>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/blog" component={Blog}/>
        </div>
      </div>
    </Router>
  </Provider>
)

export default Routes
