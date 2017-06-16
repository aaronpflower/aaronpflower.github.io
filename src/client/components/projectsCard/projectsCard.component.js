import React from 'react'
import styles from './projectsCard.styles.less'
import fonts from '../../base/fonts.less'
import classnames from 'classnames'

function ProjectCard(props) {

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.cardImg} src={props.heroImg} />
          <span className={styles.cardTitle}>{props.title}</span>
        </div>
        <div className={styles.cardContent}>
          <p className={fonts.smallText}>{props.overview}</p>
        </div>
        <div className={styles.cardAction}>
          <a className={fonts.smallText} href={props.link}>Live Url</a>
        </div>
      </div>
    )
}

export default ProjectCard
