import React from 'react'
import { projectsData } from '../../data'
import styles from './modal.styles.less'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import fonts from '../../base/fonts.less'

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
    <div onClick={back} className={classnames(grid.row, styles.container)}>
      <div className={classnames(grid.colXs12, styles.content)}>
        <h1 className={classnames(grid.row, grid.centerXs)}>{project.title}</h1>
        <div className={grid.row}>
          <img className={grid.colMd6} src={project.heroImg} />
          <div className={classnames(grid.colMd6, styles.about)}>
            <h2>Overview:</h2>
            <p>{project.overview}</p>
            <h2>contributions</h2>
            <p>{project.contributions}</p>
          </div>
        </div>
        <div className={styles.close} onClick={back}></div>

      </div>
    </div>
  )
}

export default Modal
