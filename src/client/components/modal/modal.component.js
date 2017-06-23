import React from 'react'
import { portfolioData } from '../../data'
import styles from './modal.styles.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import fonts from '../../base/fonts.less'

import Slider from '../slider/slider.component'

// https://codepen.io/koolhaus/pen/ajwcE

const Modal = ({ match, history }) => {
  const project = portfolioData[parseInt(match.params.id, 10)]
  if (!project) {
    return null
  }
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div>
      <div className={classnames(grid.row, grid.centerXs, styles.modalFrame)}>
        <div className={classnames(grid.colXs12, styles.modal)}>
          <div className={classnames(grid.row, styles.modalInset)}>
            <div className={styles.close} onClick={back}></div>
            <div className={classnames(grid.colXs12, styles.modalBody)}>
              <div className={grid.row}>
                <h2 className={classnames(grid.colXs12, fonts.mediumText, styles.title)}>{project.title}</h2>
              </div>
              <div className={grid.row}>
                <Slider class={classnames(grid.colXs12, grid.colMd8)} slideShow={project.slideShow} />
                <div className={classnames(grid.colXs12, grid.colMd4)}>
                  <h2 className={fonts.modalHeader}>Overview:</h2>
                  <p className={fonts.modalParagraph}>{project.overview}</p>
                  <h2 className={fonts.modalHeader}>Contributions:</h2>
                  <p className={fonts.modalParagraph}>{project.contributions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modalOverlay}></div>
    </div>
  )
}

export default Modal
