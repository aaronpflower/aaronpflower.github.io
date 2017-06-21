import 'normalize.css';
import styles from './main.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import configureStore from './store/configureStore'

import Home from './containers/home.container'
import About from './containers/about.container'
import Portfolio from './containers/portfolio.container'
import Blog from './containers/blog.container'
import Header from './containers/header.container'

let store = configureStore()

const Routes = () => (
  <Provider store={store}>
    <Router>
      <div className={classnames(grid.row, styles.mainWrapper)}>
        <Header/>
        <div className={classnames(grid.colXs8, styles.content)}>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/blog" component={Blog}/>
        </div>
        <div className={classnames(grid.row, grid.betweenXs, styles.lines)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </Router>
  </Provider>
)

export default Routes
