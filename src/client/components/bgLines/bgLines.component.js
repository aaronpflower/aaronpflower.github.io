import React from 'react'

import grid from 'flexboxgrid/css/flexboxgrid.min.css'
import styles from './bgLines.styles.less'
import classnames from 'classnames'

function BgLines() {
  return (
    <div className={classnames(grid.colXs10, grid.colMd12, styles.lines)}>
      <div className={classnames(grid.row, grid.betweenXs, styles.lineRow)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  )
}

export default BgLines
