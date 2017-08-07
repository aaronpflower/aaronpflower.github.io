import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import mapStateToProps from '../../utils/mapStateToProps'

import Nav from '../../components/nav/nav.component'

import grid from 'flexboxgrid/css/flexboxgrid.min.css'
import classnames from 'classnames'
import icons from 'font-awesome/css/font-awesome.min.css'
import styles from './header.styles.less'

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

    return (
      <header className={classnames(!this.props.store.loader.loaded && styles.loading, styles.header)}>
        <div className={classnames(styles.basicNav)}>
          <Link to="/" className={classnames(styles.logo)}></Link>
          <i onClick={this.toggleMenu} className={classnames(icons.fa, icons.faBars, styles.mobileBars)}/>
        </div>
        <Nav navOpen={this.state.navOpen} onClick={this.toggleMenu} />
        <div className={classnames(styles.social)}>
          <a href="https://github.com/aaronpflower" target="_blank">
            <i className={classnames(icons.fa, icons.faGithubAlt, styles.icons)}/>
          </a>
          <a href="https://www.linkedin.com/in/aaron-flower-20748339/" target="_blank">
            <i className={classnames(icons.fa, icons.faLinkedinSquare, styles.icons)}/>
          </a>
        </div>
      </header>
    )
  }
}

export default connect(mapStateToProps)(Header)
