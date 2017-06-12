import React, { Component, PropTypes } from 'react'
import { projectsData } from '../data'
import grid from 'flexboxgrid'
import classnames from 'classnames'

import styles from './projects.styles.less'
import fonts from '../base/fonts.less'

function ProjectCard(props) {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.cardImg} src={props.heroImg} />
          <span className={styles.cardTitle}>{props.title}</span>
        </div>
        <div className={styles.cardContent}>
          <p className={fonts.smallText}>{props.overview}</p>
        </div>
        <div className={styles.cardAction}>
          <a className={fonts.smallText} href={props.link}>Live Url</a>
        </div>
      </div>
    )
}

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsData: projectsData
    }
  }

  render() {
    let Projects = this.state.projectsData.map((item, i) => {
      return (
        <div key={i+1} className={grid.colMd4}>
          <ProjectCard heroImg={item.heroImg} title={item.name} overview={item.overview} link={item.liveUrl}/>
        </div>
      )
    })

    return (
      <div className={classnames(grid.row, grid.centerXs)}>
        <h1 className={classnames(grid.colXs12, fonts.mediumText)}>Professional Projects</h1>
        {Projects}
      </div>
    )
  }
}

export default Projects
