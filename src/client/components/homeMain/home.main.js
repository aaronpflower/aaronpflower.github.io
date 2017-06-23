import React from 'react'
import styles from './home.main.less'
import fonts from '../../base/fonts.less'

import classnames from 'classnames'

function HomeMain (props) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <div className={classnames(fonts.largeText, styles.firstName)}>
          <span>A</span>
          <span>A</span>
          <span>R</span>
          <span>O</span>
          <span>N</span>
        </div>
        <div className={classnames(fonts.largeText, styles.lastName)}>
          <span className={styles.letter}>F</span>
          <span className={styles.letter}>L</span>
          <span className={styles.letter}>O</span>
          <span className={styles.letter}>W</span>
          <span className={styles.letter}>E</span>
          <span className={styles.letter}>R</span>
        </div>
        <p className={classnames(styles.occupation, styles.spacer, fonts.smallText)}>Javascript Developer</p>
        <p className={classnames(styles.spacer, fonts.smallText, styles.strengths)}>Javascript <span className={styles.bar}>|</span> HTML5 <span className={styles.bar}>|</span> CSS3 <span className={styles.bar}>|</span> React <span className={styles.bar}>|</span> Redux <span className={styles.bar}>|</span> Node</p>
        <a href={require("../../base/assets/AaronFlowerResume.pdf")} download="AaronFlowerResume.pdf">
          <button className={classnames(styles.spacer, styles.btn)}>Resume</button>
        </a>
      </div>
    </div>
  )
}

export default HomeMain
