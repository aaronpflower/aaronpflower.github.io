import React from 'react'
import styles from './header.styles.less'
import fonts from '../../base/fonts.less'
import classnames from 'classnames'

function Header (props) {
  return (
    <div className={classnames(props.class, styles.header)}>
      <h1 className={fonts.header}>{props.title}</h1>
      <span className={styles.underline}></span>
    </div>
  )
}

export default Header
