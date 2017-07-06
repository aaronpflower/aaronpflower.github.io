import React from 'react'
import { portfolioData } from '../../data'

import styles from './modal.styles.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import fonts from '../../base/fonts.less'

import Slider from '../slider/slider.component'

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
      <div className={classnames(grid.row, styles.container)}>
        <div className={classnames(grid.colXs12, grid.colMd8, styles.modal)}>
          <div className={classnames(grid.row, styles.modalInset)}>
            <div className={styles.close} onClick={back}></div>
            <div className={classnames(grid.colXs12, styles.modalBody)}>
              <div className={grid.row}>
                <Slider class={classnames(grid.colXs12, grid.colMd8)} slideShow={project.slideShow} />
                <div className={classnames(styles.content, grid.colXs12, grid.colMd4)}>
                  <h2 className={classnames(fonts.mediumModalBold, fonts.toUpper, styles.spacer)}>{project.title}</h2>
                  <h2 className={classnames(fonts.smallTextBold, fonts.toUpper, styles.spacer)}>Overview:</h2>
                  <p className={classnames(styles.spacer, fonts.smallText)}>{project.overview}</p>
                  <h2 className={classnames(fonts.smallTextBold, fonts.toUpper, styles.spacer)}>Contributions:</h2>
                  <p className={fonts.smallText}>{project.contributions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  )
}

export default Modal
