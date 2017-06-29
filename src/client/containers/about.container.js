import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { aboutData } from '../data'

import styles from './about.styles.less'
import classnames from 'classnames'
import grid from 'flexboxgrid'
import { CSSTransitionGroup } from 'react-transition-group'
import fonts from '../base/fonts.less'

import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapStateToProps'
import { setLoader } from '../actions/actions'

import PageHeadline from '../components/pageHeadline/pageHeadline.component'
import TriColoredBars from '../components/triColoredBars/triColoredBars.component'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutData: aboutData,
      inView: false
    }
  }

  componentDidMount() {
      this.setState({
        inView: true
      })
      this.props.dispatch(setLoader())
  }

  render() {
    let content = this.state.aboutData.map((item, i) => {
      return (
        <li className={classnames(styles.listItem, grid.colXs12)} key={i}>
          <div className={classnames(this.state.inView && styles.inView, styles.itemContent, grid.row)}>
            <p className={classnames(grid.colXs12, fonts.smallParagraph, styles.title)}>{item.title}</p>
            <TriColoredBars />
            <p className={classnames(grid.colXs12, fonts.smallParagraph, styles.date)}>{item.date}</p>
            <p className={classnames(grid.colXs12, fonts.smallParagraph, styles.summary)}>{item.summary}</p>
          </div>
        </li>
      )
    })

    return (
      <div className={classnames(grid.row, styles.container)}>
        <PageHeadline title={"Work History"} />
        <ul className={classnames(grid.colXs12, styles.listContainer)}>
          {content}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(About)
