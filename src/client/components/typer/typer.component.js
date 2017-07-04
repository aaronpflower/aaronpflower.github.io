import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TypeWriter from 'react-typewriter'
import classnames from 'classnames'

import styles from './typer.styles.less'
import fonts from '../../base/fonts.less'

class Typer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let items = this.props.data.map((item, i) => {
      return <p className={fonts.code} key={i+1}>{item}</p>
    })
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <TypeWriter onTypingEnd={this.props.onTypingEnd} typing={1}>{items}</TypeWriter>
        </div>
      </div>
    )
  }
}

Typer.PropTypes = {
  data: PropTypes.array,
  onTypingEnd: PropTypes.func
}

export default Typer;
