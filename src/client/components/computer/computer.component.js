import React from 'react'
import styles from './computer.styles.less'

function Computer (props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.comp}>
        <div className={styles.monitor}>
          <div className={styles.mid}></div>
        </div>
        <div className={styles.base}></div>
      </div>
    </div>
  )
}

export default Computer
