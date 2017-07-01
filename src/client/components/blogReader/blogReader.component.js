import React, { Component, PropTypes } from 'react'

import styles from './blogReader.styles.less'
import fonts from '../../base/fonts.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'

import { connect } from 'react-redux'
import mapStateToProps from '../../utils/mapStateToProps'

class BlogReader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null
    }

    this.back = this.back.bind(this)
    this.matchId = this.matchId.bind(this)
  }

  componentWillMount () {
    const index = this.props.store.blog.posts.findIndex(this.matchId)
    const post = this.props.store.blog.posts[index]
    this.setState({
      post: post
    })
  }

  matchId(element) {
    return element.id == this.props.match.params.id;
  }

  back (e) {
    e.stopPropagation()
    this.props.history.goBack()
  }

  render() {
    let content

    if (this.state.post != null) {
      content = (
        <div>
          <p className={fonts.mediumText}>{this.state.post.title}</p>
          <p className={fonts.smallText} dangerouslySetInnerHTML={{__html: this.state.post.content}}></p>
        </div>
      )
    } else {
      content = (
        <div>
          <p>Loading</p>
        </div>
      )
    }

    return (
      <div className={classnames(grid.colXs12, styles.container)}>
        <p onClick={this.back}>Back</p>
        {content}
      </div>
    )
  }
}

export default connect(mapStateToProps)(BlogReader)
