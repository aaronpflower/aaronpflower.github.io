import React from 'react'
import PropTypes from 'prop-types'

import styles from './projectsCard.styles.less'
import fonts from '../../base/fonts.less'
import classnames from 'classnames'

import icons from 'font-awesome/css/font-awesome.css'

import TriColoredBars from '../triColoredBars/triColoredBars.component'

function ProjectCard(props) {

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.cardImg} src={props.heroImg} />
          <span className={classnames(fonts.smallTextBold, fonts.toUpper, styles.cardTitle)}>{props.title}</span>
        </div>
        <TriColoredBars />
        <div className={styles.cardContent}>
          <span className={classnames(icons.fa, icons.faWrench, styles.wrench)}></span>
          <p className={classnames(fonts.smallText, styles.stack)} dangerouslySetInnerHTML={{__html: props.stack}}></p>
        </div>

      </div>
    )
}

ProjectCard.PropTypes = {
  heroImg: PropTypes.string,
  title: PropTypes.string,
  stack: PropTypes.string,
  link: PropTypes.string
}

export default ProjectCard
