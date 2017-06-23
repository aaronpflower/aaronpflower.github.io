import React from 'react'
import styles from './projectsList.styles.less'
import classnames from 'classnames'
import grid from 'flexboxgrid'
import fonts from '../../base/fonts.less'
import { portfolioData } from '../../data'

import { Link } from 'react-router-dom'

import ProjectCard from '../projectsCard/projectsCard.component'
import Header from '../header/header.component'

function ProjectsList(props) {

  return (
    <div className={classnames(props.isModal && styles.blur, grid.row, styles.projects)}>
      <Header class={grid.colXs12} title={'Portfolio'} />
      {portfolioData.map(i => (
        <Link
          className={classnames(grid.colXs12, grid.colMd4)}
          key={i.id}
          to={{
            pathname: `/project/${i.id}`,
            state: { modal: true }
          }}
        >
          <ProjectCard heroImg={i.heroImg} stack={i.stack} title={i.title} overview={i.overview} link={i.liveUrl}/>
        </Link>
      ))}
    </div>
  )
}

export default ProjectsList
