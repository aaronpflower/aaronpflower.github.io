import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import icons from 'font-awesome/css/font-awesome.css'
import styles from './nav.styles.less'

function nav (props) {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={classnames(styles.link, styles.home)}><i className={classnames(icons.fa, icons.faHome, styles.navIcon)}/></Link>
      <Link to="/about" className={classnames(styles.link, styles.male)}><i className={classnames(icons.fa, icons.faMale, styles.navIcon)}/></Link>
      <Link to="/projects" className={classnames(styles.link, styles.code)}><i className={classnames(icons.fa, icons.faCode, styles.navIcon)}/></Link>
    </nav>
  )
}

export default nav;
