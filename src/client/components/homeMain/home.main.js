import React from 'react'
import styles from './home.main.less'
import fonts from '../../base/fonts.less'

import classnames from 'classnames'

function HomeMain (props) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <p className={fonts.largeText}>Aaron</p>
        <p className={classnames(styles.lastName, fonts.largeText)}>Flower</p>
        <p className={classnames(styles.spacer, fonts.smallText)}>Javascript Developer</p>
        <p className={classnames(styles.spacer, fonts.smallText, styles.strengths)}>Javascript <span className={styles.bar}>|</span> HTML5 <span className={styles.bar}>|</span> CSS3 <span className={styles.bar}>|</span> React <span className={styles.bar}>|</span> Redux <span className={styles.bar}>|</span> Node</p>
        <a href={require("../../base/assets/AaronFlowerResume.pdf")} download="AaronFlowerResume.pdf">
          <button className={classnames(styles.spacer, styles.btn)}>Resume</button>
        </a>
      </div>
    </div>
  )
}

export default HomeMain
