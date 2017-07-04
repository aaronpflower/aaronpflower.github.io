import React from 'react'
import styles from './loading.styles.less'

function Loading(props) {
  return (
  	<div className={styles.loadingText}>
  		<span className={styles.loadingTextWords}>L</span>
  		<span className={styles.loadingTextWords}>O</span>
  		<span className={styles.loadingTextWords}>A</span>
  		<span className={styles.loadingTextWords}>D</span>
  		<span className={styles.loadingTextWords}>I</span>
  		<span className={styles.loadingTextWords}>N</span>
  		<span className={styles.loadingTextWords}>G</span>
  	</div>
  )
}

export default Loading
