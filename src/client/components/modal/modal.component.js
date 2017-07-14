import React from 'react'
import { portfolioData } from '../../data'

import styles from './modal.styles.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import fonts from '../../base/fonts.less'
import icons from 'font-awesome/css/font-awesome.css'


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
        <div className={classnames(grid.colXs12, grid.colSm8, styles.modal)}>
          <div className={classnames(grid.row, styles.modalInset)}>
            <div className={classnames(grid.colXs12, styles.modalBody)}>
              <div className={grid.row}>
                <div className={classnames(grid.colXs12, styles.header)}>
                  <div className={classnames(grid.row, grid.middleXs, styles.closeWrapper)}>
                    <span onClick={back} className={classnames(icons.fa, icons.faArrowLeft, styles.close)}></span>
                    <h2 className={classnames(grid.colXs12,fonts.mediumModalBold, fonts.toUpper, fonts.center)}>{project.title}</h2>
                  </div>
                </div>
                <Slider class={classnames(grid.colXs12, grid.colSm8)} slideShow={project.slideShow} />
                <div className={classnames(styles.content, grid.colXs12, grid.colSm4)}>
                  <h2 className={classnames(fonts.smallTextBold, fonts.toUpper, styles.spacer)}>Overview:</h2>
                  <p className={classnames(styles.spacer, fonts.smallText)}>{project.overview}</p>
                  <h2 className={classnames(fonts.smallTextBold, fonts.toUpper, styles.spacer)}>Contributions:</h2>
                  <p className={classnames(styles.spacer, fonts.smallText)}>{project.contributions}</p>
                  {project.liveUrl ? <a className={fonts.smallText} target="_blank" href={project.liveUrl}>Live Url</a> : null}
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
