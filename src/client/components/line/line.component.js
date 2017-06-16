import React from 'react'
import styles from './line.styles.less'
import classnames from 'classnames'

function Line (props) {
  return (
    <div className={classnames(props.class, styles.line)}></div>
  )
}

export default Line
