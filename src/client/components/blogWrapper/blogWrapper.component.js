import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import styles from './blogWrapper.styles.less'
import fonts from '../../base/fonts.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'

import BlogList from '../blogList/blogList.component'
import BlogReader from '../blogReader/blogReader.component'
import PageHeadline from '../pageHeadline/pageHeadline.component'

import { connect } from 'react-redux'
import mapStateToProps from '../../utils/mapStateToProps'
import { setLoader, getPosts } from '../../actions/actions'

class BlogWrapper extends Component {
  constructor(props) {
    super(props)
    this.previousLocation = null
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

  // How to set this innerHTML and sanitize it properly? So it only includes <br />
  // <p className={fonts.smallText} dangerouslySetInnerHTML={{__html: item.content}}></p>
  render() {
    const { location } = this.props
    const isReader = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )

    return (
      <div className={classnames(grid.row, styles.container)}>
        <PageHeadline class={grid.row} title={"What I'm Learning"} />
        <Switch location={isReader ? this.previousLocation : location}>
          <Route exact path='/blog' render={() => <BlogList posts={this.props.store.blog.posts} /> }/>
        </Switch>
        {isReader ? <Route path='/blog/:id' component={BlogReader} /> : null}
      </div>
    )
  }
}

export default connect(mapStateToProps)(BlogWrapper)
