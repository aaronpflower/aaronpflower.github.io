import React from 'react'
import styles from './projectsList.styles.less'
import classnames from 'classnames'
import grid from 'flexboxgrid'
import fonts from '../../base/fonts.less'
import { projectsData } from '../../data'

import { Link } from 'react-router-dom'

import ProjectCard from '../projectsCard/projectsCard.component'
import Header from '../header/header.component'

function ProjectsList(props) {

  return (
    <div className={classnames(props.isModal && styles.blur, grid.row, styles.projects)}>
      <Header class={grid.colXs12} title={'Projects'} />
      {projectsData.map(i => (
        <Link
          className={grid.colMd3}
          key={i.id}
          to={{
            pathname: `/project/${i.id}`,
            state: { modal: true }
          }}
        >
          <ProjectCard heroImg={i.heroImg} title={i.title} overview={i.overview} link={i.liveUrl}/>
        </Link>
      ))}
    </div>
  )
}

export default ProjectsList
