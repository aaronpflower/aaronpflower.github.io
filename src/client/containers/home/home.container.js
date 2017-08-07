import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { typersData } from '../../data'

import mapStateToProps from '../../utils/mapStateToProps'
import { setLoader } from '../../actions/actions'

import { CSSTransitionGroup } from 'react-transition-group'
import classnames from 'classnames'
import grid from 'flexboxgrid/css/flexboxgrid.min.css'
import styles from './home.styles.less'
import icons from 'font-awesome/css/font-awesome.min.css'
import fonts from '../../base/fonts.less'

import Typer from '../../components/typer/typer.component';
import Computer from '../../components/computer/computer.component'
import HomeMain from '../../components/homeMain/home.main'
import Loading from '../../components/loader/loading.component'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      loaded: false,
      typersData: typersData
    }
    this.onTypingEnd = this.onTypingEnd.bind(this)
    this.handleInitalLoad = this.handleInitalLoad.bind(this)
    this.skipIntro = this.skipIntro.bind(this)
  }

  handleInitalLoad() {
    this.props.dispatch(setLoader())
  }

  onTypingEnd() {
    this.setState((prevState, props) => {
      return {index: prevState.index + 1};
    });
  }

  componentDidUpdate() {
    if (this.state.loaded === false && this.state.index === this.state.typersData.length) {
      this.setState({
        loaded: true
      })
      this.props.dispatch(setLoader())
    }
  }

  skipIntro() {
    this.props.dispatch(setLoader())
  }

  render() {
    let index = this.state.index
    let content
    let computer
    let button

    if (Math.abs(this.state.index) === this.state.typersData.length || this.props.store.loader.loaded === true) {
      content = <HomeMain />
      computer = null
      button = null
    } else {
      button = <p className={classnames(styles.skipWrapper, fonts.smallText)} onClick={this.skipIntro}>Skip Intro<span className={classnames(styles.skip, icons.fa, icons.faArrowRight)}></span></p>
      computer = <Computer />
      content = this.state.typersData.slice(index, index+1).map((item, i) => {
        return <Typer onTypingEnd={this.onTypingEnd} key={index} data={item.data}/>;
      })
    }

    return (
      <div className={classnames(grid.row, styles.container)}>
        <div className={classnames(grid.colXs12)}>
          <CSSTransitionGroup
            transitionName={styles}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={500}>
            {computer}
            {content}
          </CSSTransitionGroup>
          {button}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
