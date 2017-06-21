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
    <div className={classnames(grid.row, styles.container)}>
      <h2 className={classnames(grid.colXs12, fonts.mediumText, styles.title)}>{project.title}</h2>
      <div className={classnames(grid.colXs12, grid.colMd8)}>
        <div className={classnames(grid.row, styles.contentWrapper)}>
          <div className={classnames(grid.colXs10, grid.colMd8, styles.imgWrapper)}>
            <div className={grid.row}>
              <Slider class={grid.colXs12} slideShow={project.slideShow} />
            </div>
          </div>
          <div className={classnames(grid.colXs10, grid.colMd4, styles.about)}>
            <h2 className={fonts.modalHeader}>Overview:</h2>
            <p className={fonts.modalParagraph}>{project.overview}</p>
            <h2 className={fonts.modalHeader}>Contributions:</h2>
            <p className={fonts.modalParagraph}>{project.contributions}</p>
            <h2 className={fonts.modalHeader}>Tech Stack:</h2>
            <p className={fonts.modalParagraph}>{project.stack}</p>
          </div>
        </div>
      </div>
      <div className={styles.close} onClick={back}></div>
    </div>
  )
}

export default Modal
