import React, { Component, PropTypes } from 'react'

import styles from './blog.styles.less'
import fonts from '../base/fonts.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'

import PageHeadline from '../components/pageHeadline/pageHeadline.component'
import BlogCard from '../components/blogCard/blogCard.component'

import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapStateToProps'
import { setLoader, getPosts } from '../actions/actions'

class Blog extends Component {
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

  // How to set this innerHTML and sanitize it properly? So it only includes <br />
  // <p className={fonts.smallText} dangerouslySetInnerHTML={{__html: item.content}}></p>
  render() {
    let posts = this.props.store.blog.posts.map((item, i) => {
      return (
        <div className={classnames(grid.colXs12, grid.colMd6)}>
          <BlogCard key={i} heroImg={item.images[0].url} title={item.title} intro={item.content} date={item.published}/>
        </div>
      )
    })

    return (
      <div className={classnames(grid.row, styles.container)}>
        <PageHeadline class={grid.colXs12} title={"What I'm Learning"} />
        {posts}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Blog)
