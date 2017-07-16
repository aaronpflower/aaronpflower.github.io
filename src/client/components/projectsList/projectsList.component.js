import React from 'react'
import PropTypes from 'prop-types'

import styles from './projectsList.styles.less'
import classnames from 'classnames'
import grid from 'flexboxgrid/css/flexboxgrid.min.css'
import fonts from '../../base/fonts.less'
import { portfolioData } from '../../data'

import { Link } from 'react-router-dom'

import ProjectCard from '../projectsCard/projectsCard.component'
import PageHeadline from '../pageHeadline/pageHeadline.component'

function ProjectsList(props) {

  return (
    <div className={classnames(props.isModal && styles.blur, grid.row, styles.projects)}>
      <PageHeadline class={grid.colXs12} title={'Portfolio'} />
      {portfolioData.map(i => (
        <Link
          className={classnames(grid.colXs12, grid.colMd4)}
          key={i.id}
          to={{
            pathname: `/portfolio/${i.id}`,
            state: { modal: true }
          }}
        >
          <ProjectCard heroImg={i.heroImg} stack={i.stack} title={i.title} overview={i.overview} link={i.liveUrl}/>
        </Link>
      ))}
    </div>
  )
}

ProjectsList.PropTypes = {
  isModal: PropTypes.bool
}

export default ProjectsList
