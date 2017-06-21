import React, { Component, PropTypes } from 'react'
import styles from './about.styles.less'
import classnames from 'classnames'
import grid from 'flexboxgrid'
import { aboutData } from '../data'
import ReactDom from 'react-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import fonts from '../base/fonts.less'

import Header from '../components/header/header.component'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutData: aboutData,
      inView: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener("resize", this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener("resize", this.handleScroll);
  }

  handleScroll() {
    this.setState({
      inView: true
    })
  }
  // https://codepen.io/tutsplus/pen/QNeJgR
  render() {
    let content = this.state.aboutData.map((item, i) => {
      return (
        <li className={classnames(this.state.inView && styles.inView, styles.listItem)} key={i}>
          <div className={classnames(this.state.inView && styles.inView, styles.itemContent)}>
            <p>{item.title}</p>
            <p>{item.date}</p>
            <p className={fonts.smallParagraph}>{item.summary}</p>
          </div>
        </li>
      )
    })

    return (
      <div className={styles.container}>
        <Header title={'Timeline'} />
        <ul className={styles.listContainer}>
          {content}
        </ul>
      </div>
    )
  }
}

export default About
