import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    if (this.state.posts === null || this.state.posts.length < 1) {
      posts = (
        <div className={styles.wrapper}>
        <h2 className={fonts.smallText}>Check back soon!</h2>
        <p className={fonts.smallText}>• Topics may include...</p>
        <p className={fonts.smallText}>• Javascript development: OOP the JS way, Functional JS Programming</p>
        <p className={fonts.smallText}>• What core CS topics im learning</p>
        <p className={fonts.smallText}>• Web App Performance</p>
        <p className={fonts.smallText}>• And much more!</p>
        </div>
      )
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
