import 'normalize.css';
import styles from './main.less'
import grid from 'flexboxgrid/css/flexboxgrid.min.css'
import classnames from 'classnames'

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom'

import configureStore from './store/configureStore'

import Home from './containers/home/home.container'
import About from './containers/about/about.container'
import Portfolio from './containers/portfolio/portfolio.container'
import Blog from './containers/blog/blog.container'
import Header from './containers/header/header.container'
import BgLines from './components/bgLines/bgLines.component'

const supportsHistory = 'pushState' in window.history

let store = configureStore()

const Routes = () => (
  <Provider store={store}>
    <HashRouter basename={'/'} forceRefresh={!supportsHistory}>
      <div className={classnames(grid.row, styles.mainWrapper)}>
        <div className={classnames(grid.colXs10, grid.colMd8, styles.content)}>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/blog" component={Blog}/>
        </div>
        <BgLines />
      </div>
    </HashRouter>
  </Provider>
)

export default Routes
