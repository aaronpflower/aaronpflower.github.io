import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './blogList.styles.less'
import classnames from 'classnames'
import grid from 'flexboxgrid/css/flexboxgrid.min.css'
import fonts from '../../base/fonts.less'

import { Link } from 'react-router-dom'

import BlogCard from '../blogCard/blogCard.component'
import Loader from '../loader/loading.component'

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
    if (this.state.posts === null || this.state.posts.length < 1) {
      posts = <Loader />
    } else {
      posts = this.state.posts.map((item, i) => {
        return (
          <Link
          className={classnames(grid.colXs12, grid.colMd6)}
          onClick={()=> this.props.onClick(item.id)}
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

BlogList.PropTypes = {
  blog: PropTypes.array,
  onClick: PropTypes.func
}

export default BlogList
