import React, { Component, PropTypes } from 'react'

import styles from './blogList.styles.less'
import classnames from 'classnames'
import grid from 'flexboxgrid'
import fonts from '../../base/fonts.less'

import { Link } from 'react-router-dom'

import BlogCard from '../blogCard/blogCard.component'

class BlogList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: null
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      posts: nextProps.blog
    })
  }

  render () {
    let posts
    if (this.state.posts != null) {
      posts = this.state.posts.map((item, i) => {
        return (
          <Link
          className={classnames(grid.colXs12, grid.colMd6)}
          key={item.id}
          to={{
            pathname: `/blog/${item.id}`,
            state: { modal: true }
          }}
          >
          <BlogCard heroImg={item.images[0].url} title={item.title} intro={item.content} date={item.published}/>
          </Link>
        )
      })
    }

    return (
      <div className={classnames(grid.colXs12, styles.container)}>
        <div className={grid.row}>
          {posts}
        </div>
      </div>
    )
  }
}

export default BlogList
