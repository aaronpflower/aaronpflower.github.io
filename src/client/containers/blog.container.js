import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import styles from './blog.styles.less'
import fonts from '../base/fonts.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'

import BlogWrapper from '../components/blogWrapper/blogWrapper.component'

import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapStateToProps'
import { setLoader, getPosts } from '../actions/actions'

class BlogContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.store.blog.posts.length === 0) {
      this.props.dispatch(getPosts())
    }
  }

  componentDidMount() {
    this.props.dispatch(setLoader())
  }

  render() {
    return (
      <Router>
        <Route component={BlogWrapper} />
      </Router>
    )
  }
}

export default connect(mapStateToProps)(BlogContainer)
