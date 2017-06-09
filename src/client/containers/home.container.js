import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import Typer from '../components/typer.component';
import { CSSTransitionGroup } from 'react-transition-group'
import HomeMain from '../components/home.main';

import grid from 'flexboxgrid'
import styles from './home.styles.less'
import animation from '../base/animation.less'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      typersData: [
        {
          data: [ "const Dev = {", "something: function() {", "return 'something'", "}", "}"]
        },
        {
          data: [ "const Aaron = Object.assign(Object.create(Dev), {","  design: true,", "selfTaught: true", "})"]
        },
        {
          data: ["{", "design: true,", "selfTaught: true", "}"]
        }
      ]
    }
    this.onTypingEnd = this.onTypingEnd.bind(this)
  }

  onTypingEnd() {
    this.setState((prevState, props) => {
      return {index: prevState.index + 1};
    });
  }

  render() {
    let index = this.state.index
    let content

    if (Math.abs(this.state.index) === this.state.typersData.length) {
      content = <HomeMain/>
    } else {
      content = this.state.typersData.slice(index, index+1).map((item, i) => {
        return <Typer onTypingEnd={this.onTypingEnd} key={index} data={item.data}/>;
      })
    }

    return (
      <div className={styles.container}>
        <CSSTransitionGroup
          transitionName={styles}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {content}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Home
