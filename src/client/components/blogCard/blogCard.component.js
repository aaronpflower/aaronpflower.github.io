import React from 'react'
import PropTypes from 'prop-types'

import styles from './blogCard.styles.less'
import fonts from '../../base/fonts.less'
import classnames from 'classnames'
import moment from 'moment'

import icons from 'font-awesome/css/font-awesome.css'

function BlogCard(props) {
    let date = moment(props.date).format('L');
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.cardImg} src={props.heroImg} />
        </div>
        <div className={styles.cardContent}>
          <p className={classnames(fonts.smallText, styles.date)}>{date}</p>
          <p className={classnames(fonts.mediumText, styles.cardTitle)}>{props.title}</p>
          <p className={classnames(fonts.smallText, styles.intro)} dangerouslySetInnerHTML={{__html: props.intro}}></p>
        </div>
        <div className={styles.cardAction}>
          {props.link ? <a className={fonts.smallText} href={props.link}>Live Url</a> : null}
        </div>
      </div>
    )
}

BlogCard.PropTypes = {
  date: PropTypes.string,
  heroImg: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.string,
  link: PropTypes.string
}


export default BlogCard
