import React, { Component, PropTypes } from 'react'
import styles from './blog.styles.less'
import fonts from '../base/fonts.less'

class Blog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.mediumText}>Check back soon! Topics may include...</h2>
        <p className={styles.smallText}>•Javascript development: OOP Protoypes the JS way, Functional Programming</p>
        <p className={styles.smallText}>•What core CS topics im learning</p>
      </div>
    )
  }
}

export default Blog
