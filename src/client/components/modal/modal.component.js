import React from 'react'
import { projectsData } from '../../data'
import styles from './modal.styles.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import fonts from '../../base/fonts.less'

import Slider from '../slider/slider.component'

const Modal = ({ match, history }) => {
  const project = projectsData[parseInt(match.params.id, 10)]
  if (!project) {
    return null
  }
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.content}>
        <div className={styles.imgWrapper}>
          <Slider slideShow={project.slideShow} />
        </div>
        <div className={styles.about}>
          <h2>Overview:</h2>
          <p>{project.overview}</p>
          <h2>Contributions</h2>
          <p>{project.contributions}</p>
          <h2>Tech Stack</h2>
          <p>{project.stack}</p>
        </div>
      </div>
      <div className={styles.close} onClick={back}></div>
    </div>
  )
}

export default Modal
