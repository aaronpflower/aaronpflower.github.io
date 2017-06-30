import React from 'react'

import styles from './blogReader.styles.less'
import fonts from '../../base/fonts.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'

import { connect } from 'react-redux'
import mapStateToProps from '../../utils/mapStateToProps'

function BlogReader(props) {
  function isBigEnough(element) {
    return element.id == props.match.params.id;
  }
  const index = props.store.blog.posts.findIndex(isBigEnough)
  const post = props.store.blog.posts[index]
  if (!post) {
    return null
  }
  const back = (e) => {
    e.stopPropagation()
    props.history.goBack()
  }

  return (
    <div className={classnames(grid.colXs12, styles.container)}>
      <p onClick={back}>Back</p>
      <p className={fonts.mediumText}>{post.title}</p>
      <p className={fonts.smallText} dangerouslySetInnerHTML={{__html: post.content}}></p>
    </div>
  )
}

export default connect(mapStateToProps)(BlogReader)
