import React from 'react'
import styles from './projectsCard.styles.less'
import fonts from '../../base/fonts.less'
import classnames from 'classnames'

import icons from 'font-awesome/css/font-awesome.css'

function ProjectCard(props) {

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.cardImg} src={props.heroImg} />
          <span className={styles.cardTitle}>{props.title}</span>
        </div>
        <div className={styles.cardContent}>
          <span className={classnames(icons.fa, icons.faWrench, styles.wrench)}></span>
          <p className={classnames(fonts.smallText, styles.stack)}>{props.stack}</p>
        </div>
        <div className={styles.triColoredBorder}>
          <span className={styles.red}></span>
          <span className={styles.blue}></span>
          <span className={styles.yellow}></span>
        </div>
        <div className={styles.cardAction}>
          <a className={fonts.smallText} href={props.link}>Live Url</a>
        </div>
      </div>
    )
}

export default ProjectCard
