import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Typer from '../components/typer.component';
import HomeMain from '../components/home.main'
import mapStateToProps from '../utils/mapStateToProps'
import { setLoader } from '../actions/actions'

import grid from 'flexboxgrid'
import styles from './home.styles.less'
import fonts from '../base/fonts.less'
import animation from '../base/animation.less'

// https://codepen.io/42EG4M1/pen/bVMzze
function Loading(props) {
  return (
  	<div className={styles.loadingText}>
  		<span className={styles.loadingTextWords}>L</span>
  		<span className={styles.loadingTextWords}>O</span>
  		<span className={styles.loadingTextWords}>A</span>
  		<span className={styles.loadingTextWords}>D</span>
  		<span className={styles.loadingTextWords}>I</span>
  		<span className={styles.loadingTextWords}>N</span>
  		<span className={styles.loadingTextWords}>G</span>
  	</div>
  )
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      loaded: false,
      typersData: [
        {
          data: ["const AaronFlower = {", "occupation: 'Front End Developer'", "}"]
        },
        {
          data: ["AaronFlower.skills = [", "'Javascript', 'HTML5', 'CSS3', 'React', 'Redux', 'Node'", "]"]
        },
        {
          data: ["AaronFlower.experince = [","'3 years', 'creating SPAs', 'responsive user interfaces'", "]"]
        },
        {
          data: ["AaronFlower.personaility: [", "'Dedicated', 'Self-motivated'", "]"]
        }
      ]
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
    if (this.state.loaded === false) {
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

    if (Math.abs(this.state.index) === this.state.typersData.length || this.props.store.loader.loaded === true) {
      content = <HomeMain/>
      headline = null
    } else {
      headline = <Loading />
      content = this.state.typersData.slice(index, index+1).map((item, i) => {
        return <Typer onTypingEnd={this.onTypingEnd} key={index} data={item.data}/>;
      })
    }

    return (
      <div className={styles.container}>
        {headline}
        <CSSTransitionGroup
          transitionName={styles}
          transitionEnterTimeout={900}
          transitionLeaveTimeout={900}>
          {content}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
