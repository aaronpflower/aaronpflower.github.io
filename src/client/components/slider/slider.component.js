import React, { Component, PropTypes } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import styles from './slider.styles.less'

import classnames from 'classnames'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideShow: this.props.slideShow,
      index: 0
    }
    this.prevImg = this.prevImg.bind(this)
    this.nextImg = this.nextImg.bind(this)
  }

  nextImg() {
    let index = this.state.index
    this.setState((prevState, props) => {
      return {index: (prevState.index + 1) % this.state.slideShow.length};
    });
  }

  prevImg() {
    let index = this.state.index
    let length = this.state.slideShow.length
    this.setState((prevState, props) => {
      return {index: (prevState.index + length -1) % length};
    });
  }

  render() {
    let index = this.state.index

    let content = this.state.slideShow.slice(index, index+1).map((item, i) => {
        return <img key={index} className={styles.img} src={item.src} />
    })

    return (
      <div className={classnames(this.props.class, styles.container)}>
        <div onClick={this.nextImg} className={classnames(styles.arrow, styles.rightArrow)}></div>
        <div onClick={this.prevImg} className={classnames(styles.arrow, styles.leftArrow)}></div>
        <div className={styles.fourThree}>
          <CSSTransitionGroup
            transitionName={styles}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {content}
          </CSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default Slider
