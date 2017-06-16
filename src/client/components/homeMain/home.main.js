import React from 'react'
import styles from './home.main.less'
import grid from 'flexboxgrid'
import fonts from '../../base/fonts.less'

import classnames from 'classnames'

function HomeMain (props) {
  return (
    <div className={classnames(styles.container, grid.row)}>
      <div className={classnames(styles.name, grid.colMd6)}>
        <p className={fonts.largeText}>Aaron</p>
        <p className={classnames(styles.lastName, fonts.largeText)}>Flower</p>
        <p className={classnames(styles.spacer, fonts.smallText)}>Javascript Developer</p>
        <p className={classnames(styles.spacer, fonts.smallText, styles.strengths)}>Javascript <span className={styles.bar}>|</span> HTML5 <span className={styles.bar}>|</span> CSS3 <span className={styles.bar}>|</span> React <span className={styles.bar}>|</span> Redux <span className={styles.bar}>|</span> Node</p>
        <a href={require("../../base/assets/AaronFlowerResume.pdf")} download="AaronFlowerResume.pdf">
          <button className={classnames(styles.spacer, styles.btn)}>Resume</button>
        </a>
      </div>
      <div className={classnames(styles.objectives, grid.colMd6)}>
        <div className={styles.objective}>
          <p className={fonts.mediumText}>Personaility:</p>
          <p className={fonts.smallText}>• Dedicated and self-motivated</p>
        </div>
        <div className={styles.objective}>
          <p className={fonts.mediumText}>Experince:</p>
          <p className={fonts.smallText}>• Self-taught</p>
          <p className={fonts.smallText}>• Three years turning HTML, CSS and JS into websites</p>
          <p className={fonts.smallText}>• SPAs and responsive user interfaces</p>
        </div>
      </div>
    </div>
  )
}

export default HomeMain
