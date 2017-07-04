import React, { Component, PropTypes } from 'react'

import styles from './blogReader.styles.less'
import fonts from '../../base/fonts.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import icons from 'font-awesome/css/font-awesome.css'

class BlogReader extends Component {
  constructor(props) {
    super(props)
    this.back = this.back.bind(this)
  }

  back (e) {
    e.stopPropagation()
    this.props.history.goBack()
  }

  render() {
    return (
      <div className={classnames(grid.row, grid.centerXs, styles.container)}>
        <div className={classnames(grid.colXs12, grid.colMd8, styles.wrapper)}>
          <div className={classnames(grid.row, styles.modal)}>
            <div className={classnames(grid.colXs12, styles.modalInset)}>
              <a onClick={this.back} className={classnames(grid.colXs12, styles.back, icons.fa, icons.faLongArrowLeft)}><span className={fonts.smallText}>Back</span></a>
              <div className={classnames(styles.content, grid.colXs12)}>
                <p className={fonts.modalHeader}>{this.props.post[0].title}</p>
                <p className={fonts.modalParagraph} dangerouslySetInnerHTML={{__html: this.props.post[0].content}}></p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    )
  }
}

export default BlogReader
