import React from 'react'
import styles from './pageHeadline.styles.less'
import fonts from '../../base/fonts.less'
import classnames from 'classnames'

function PageHeadline (props) {
  return (
    <div className={classnames(props.class, styles.header)}>
      <h1 className={fonts.header}>{props.title}</h1>
      <span className={styles.underline}></span>
    </div>
  )
}

export default PageHeadline
