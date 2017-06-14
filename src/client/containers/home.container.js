import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { typersData } from '../data'

import Typer from '../components/typer/typer.component';
import HomeMain from '../components/homeMain/home.main'
import Loading from '../components/loader/loading.component'
import mapStateToProps from '../utils/mapStateToProps'
import { setLoader } from '../actions/actions'

import grid from 'flexboxgrid'
import styles from './home.styles.less'
import fonts from '../base/fonts.less'

function Computer (props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.comp}>
        <div className={styles.monitor}>
          <div className={styles.mid}>
            <div className={styles.site}></div>
          </div>
          <div className={classnames(styles.mid)}></div>
        </div>
        <div className={styles.base}></div>
      </div>
    </div>
  )
}

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

  render() {
    let index = this.state.index
    let content
    let headline
    let computer

    if (Math.abs(this.state.index) === this.state.typersData.length || this.props.store.loader.loaded === true) {
      content = <HomeMain />
      headline = null
      computer = null
    } else {
      headline = <Loading />
      computer = <Computer />
      content = this.state.typersData.slice(index, index+1).map((item, i) => {
        return <Typer onTypingEnd={this.onTypingEnd} key={index} data={item.data}/>;
      })
    }

    return (
      <div className={styles.container}>
        <CSSTransitionGroup
          transitionName={styles}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {headline}
          {computer}
          {content}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
