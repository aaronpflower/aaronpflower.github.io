import React from 'react'
import styles from './box.styles.less'
import fonts from '../../base/fonts.less'
import classnames from 'classnames'

function Box (props) {
  return (
    <div className={classnames(props.class, styles.box)}>
      <div className={styles.content}>
        <h1 className={fonts.boxTitle}>{props.title}</h1>
      </div>
    </div>
  )
}

export default Box
