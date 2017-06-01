import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import { CSSTransitionGroup } from 'react-transition-group'
import Nav from '../components/nav.component'

import icons from 'font-awesome/css/font-awesome.css'
import styles from './header.styles.less'
import animation from '../base/animation.less'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    if(this.state.navOpen === false) {
      this.setState({
        navOpen: true
      })
    } else {
      this.setState({
        navOpen: false
      })
    }
  }

  render() {
    let nav = null

    if (this.state.navOpen && window.innerWidth < 1024) {
      nav = <Nav />
    }
    else if (!this.state.navOpen && window.innerWidth < 1024) {
      nav = null
    }
    else if (window.innerWidth > 1024) {
      nav = <Nav />
    }

    return (
      <header className={styles.header}>
        <div className={classnames(grid.row, grid.betweenXs, grid.middleXs, styles.basicNav)}>
          <Link to="/" className={classnames(grid.colXs1, styles.logo)}>AF</Link>
          <i onClick={this.toggleMenu} className={classnames(icons.fa, icons.faBars, grid.colXs1, styles.mobileBars)}/>
        </div>
        <CSSTransitionGroup
          transitionName={animation}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {nav}
        </CSSTransitionGroup>
        <div className={classnames(styles.social)}>
          <i className={classnames(icons.fa, icons.faGithubAlt, styles.icons)}/>
          <i className={classnames(icons.fa, icons.faLinkedinSquare, styles.icons)}/>
        </div>
      </header>
    )
  }
}

export default Header
