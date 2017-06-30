import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import grid from 'flexboxgrid'
import classnames from 'classnames'
import styles from './portfolio.styles.less'
import fonts from '../base/fonts.less'

import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapStateToProps'
import { setLoader } from '../actions/actions'

import Modal from '../components/modal/modal.component'
import ProjectsList from '../components/projectsList/projectsList.component'

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)
    this.previousLocation = null
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    console.log(this)
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )

    return (
      <div className={styles.container}>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/portfolio' render={() => <ProjectsList isModal={isModal} /> }/>
        </Switch>
        {isModal ? <Route path='/project/:id' component={Modal} /> : null}
      </div>
    )
  }
}

class PortfolioGallery extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(setLoader())
  }

  render() {
    return (
      <Router>
        <Route component={PortfolioContainer} />
      </Router>
    )
  }
}

export default connect(mapStateToProps)(PortfolioGallery)
