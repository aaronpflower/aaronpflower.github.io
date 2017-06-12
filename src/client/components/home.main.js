import React from 'react'
import styles from './home.main.less'
import grid from 'flexboxgrid'
import fonts from '../base/fonts.less'

import classnames from 'classnames'

function HomeMain (props) {
  return (
    <div className={grid.row}>
      <div className={styles.resume}>
        <p className={fonts.smallText}>Resume</p>
        <a className={styles.resumeBtn} href={require("../base/assets/AaronFlowerResume.pdf")} download="AaronFlowerResume.pdf"></a>
      </div>
      <div className={grid.colMd6}>
        <p className={fonts.largeText}>Aaron Flower</p>
        <p className={fonts.smallText}>Front End Developer</p>
        <p className={fonts.smallText}>Javascript | HTML5 | CSS3 | React | Redux | Node</p>
      </div>
      <div className={grid.colMd6}>
        <p className={fonts.smallText}>Dedicated and self-motivated Front End Engineer</p>
        <p className={fonts.smallText}>an endless drive to learn and problem solve</p>
        <p className={fonts.smallText}>and a passion to write efficient Javascript code.</p>
      </div>
    </div>
  )
}

export default HomeMain
