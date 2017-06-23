import React from 'react'
import styles from './triColoredBars.styles.less'

function TriColoredBars (props) {
  return (
    <div className={styles.triColoredBorder}>
      <span className={styles.red}></span>
      <span className={styles.blue}></span>
      <span className={styles.yellow}></span>
    </div>
  )
}

export default TriColoredBars;
