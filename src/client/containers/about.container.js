import React, { Component, PropTypes } from 'react'
import styles from './about.styles.less'
import classnames from 'classnames'
import grid from 'flexboxgrid'

import Box from '../components/box/box.component'
import Line from '../components/line/line.component'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={classnames(grid.row, styles.container)}>
        <Box class={classnames(styles.box, styles.boxOne)} title={"Pizzas"} />
        <Line class={classnames(styles.line, styles.lineOne)} />
        <Box class={classnames(styles.box, styles.boxTwo)} title={"Quality Asaurance"} />
        <Line class={classnames(styles.line, styles.lineTwo)} />
        <Box class={classnames(styles.box, styles.boxThree)} title={"Front End Developer"} />
        <Line class={classnames(styles.line, styles.lineThree)} />
        <Box class={classnames(styles.box, styles.boxFour)} title={"What's next?"} />
      </div>
    )
  }
}

export default About
