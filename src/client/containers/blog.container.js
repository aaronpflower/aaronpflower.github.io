import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import styles from './blog.styles.less'
import fonts from '../base/fonts.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'

import BlogList from '../components/blogList/blogList.component'
import BlogReader from '../components/blogReader/blogReader.component'
import PageHeadline from '../components/pageHeadline/pageHeadline.component'

import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapStateToProps'
import { setLoader, getPosts, setCurrentPost } from '../actions/actions'

class BlogContainer extends Component {
  constructor(props) {
    super(props)
    this.previousLocation = null
    this.handleSetCurrentPost = this.handleSetCurrentPost.bind(this)
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  componentWillMount() {
    if (this.props.store.blog.posts.length === 0) {
      this.props.dispatch(getPosts())
    }
  }

  componentDidMount() {
    this.props.dispatch(setLoader())
  }

  handleSetCurrentPost(id) {
    let current = this.props.store.blog.posts.filter((post, i) => {
      return post.id === id
    })
    this.props.dispatch(setCurrentPost(current))
  }

  render() {
    const { location } = this.props
    const isReader = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )

    return (
      <div className={classnames(grid.row, styles.container)}>
        <PageHeadline title={"What I'm Learning"} />
        <Switch location={isReader ? this.previousLocation : location}>
          <Route exact path='/blog' render={() => <BlogList blog={this.props.store.blog.posts} onClick={this.handleSetCurrentPost} /> } />
        </Switch>
        {isReader ? <Route path='/blog/:id' render={() => <BlogReader history={this.props.history} location={location} post={this.props.store.blog.current}/> } /> : null}
      </div>
    )
  }
}

export default connect(mapStateToProps)(BlogContainer)
