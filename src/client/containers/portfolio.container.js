import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import Modal from '../components/modal/modal.component'
import ProjectsList from '../components/projectsList/projectsList.component'

import styles from './portfolio.styles.less'
import fonts from '../base/fonts.less'

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

const PortfolioGallery = () => (
  <Router>
    <Route component={PortfolioContainer} />
  </Router>
)

export default PortfolioGallery
