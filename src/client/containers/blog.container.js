import React, { Component, PropTypes } from 'react'

import styles from './blog.styles.less'
import fonts from '../base/fonts.less'

import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapStateToProps'
import { setLoader } from '../actions/actions'

class Blog extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      this.props.dispatch(setLoader())
  }

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.mediumText}>Check back soon!</h2>
        <p className={styles.smallText}>• Topics may include...</p>
        <p className={styles.smallText}>• Javascript development: OOP the JS way, Functional JS Programming</p>
        <p className={styles.smallText}>• What core CS topics im learning</p>
        <p className={styles.smallText}>• Web App Performance</p>
        <p className={styles.smallText}>• And much more!</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Blog)
