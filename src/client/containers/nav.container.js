import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import icons from 'font-awesome/css/font-awesome.css'

import styles from './nav.styles.less'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={classnames(grid.row, grid.betweenXs)}>
          <Link to="/" className={styles.logo}>AF</Link>
          <i className={classnames(icons.fa, icons.faBars, styles.mobileBars)}/>
        </div>
        <nav className={classnames(grid.row, grid.aroundXs, styles.nav)}>
          <Link to="/"><i className={classnames(icons.fa, icons.faHome)}/></Link>
          <Link to="/about"><i className={classnames(icons.fa, icons.faHome)}/></Link>
          <Link to="/projects"><i className={classnames(icons.fa, icons.faHome)}/></Link>
          <Link to="/skills"><i className={classnames(icons.fa, icons.faHome)}/></Link>
        </nav>
      </header>
    )
  }
}

export default Nav
