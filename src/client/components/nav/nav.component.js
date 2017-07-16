import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import { CSSTransitionGroup } from 'react-transition-group'
import icons from 'font-awesome/css/font-awesome.min.css'
import styles from './nav.styles.less'

function nav (props) {
  let nav
  if (props.navOpen && window.innerWidth < 1024) {
    nav = (
      <nav className={styles.nav}>
        <Link to="/" onClick={props.onClick} className={classnames(styles.link, styles.home)}><i className={classnames(icons.fa, icons.faHome, styles.navIcon)}/></Link>
        <Link to="/about" onClick={props.onClick} className={classnames(styles.link, styles.male)}><i className={classnames(icons.fa, icons.faMale, styles.navIcon)}/></Link>
        <Link to="/portfolio" onClick={props.onClick} className={classnames(styles.link, styles.code)}><i className={classnames(icons.fa, icons.faCode, styles.navIcon)}/></Link>
        <Link to="/blog" onClick={props.onClick} className={classnames(styles.link, styles.blog)}><i className={classnames(icons.fa, icons.faRss, styles.navIcon)}/></Link>
      </nav>
    )
  }
  else if (!props.navOpen && window.innerWidth < 1024) {
    nav = null
  }
  else if (window.innerWidth > 1024) {
    nav = (
      <nav className={styles.nav}>
        <Link to="/" className={classnames(styles.link, styles.home)}><i className={classnames(icons.fa, icons.faHome, styles.navIcon)}/></Link>
        <Link to="/about" className={classnames(styles.link, styles.male)}><i className={classnames(icons.fa, icons.faMale, styles.navIcon)}/></Link>
        <Link to="/portfolio" className={classnames(styles.link, styles.code)}><i className={classnames(icons.fa, icons.faCode, styles.navIcon)}/></Link>
        <Link to="/blog" className={classnames(styles.link, styles.blog)}><i className={classnames(icons.fa, icons.faRss, styles.navIcon)}/></Link>
      </nav>
    )
  }
  return (
    <CSSTransitionGroup
      transitionName={styles}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      {nav}
    </CSSTransitionGroup>
  )
}

export default nav;
