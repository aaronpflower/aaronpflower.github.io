import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { projectsData } from '../data'
import grid from 'flexboxgrid'
import classnames from 'classnames'
import ProjectCard from '../components/projectsCard/projectsCard.component'
import Modal from '../components/modal/modal.component'

import styles from './projects.styles.less'
import fonts from '../base/fonts.less'

class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.previousLocation = null
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/projects' component={Projects}/>
        </Switch>
        {isModal ? <Route path='/project/:id' component={Modal} /> : null}
      </div>
    )
  }
}

const Projects = () => (
  <div className={classnames(styles.projects, grid.row, grid.centerXs)}>
    <h1 className={classnames(grid.colXs12, fonts.mediumText)}>Professional Projects</h1>
    {projectsData.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/project/${i.id}`,
          state: { modal: true }
        }}
      >
        <div className={grid.colMd4}>
          <ProjectCard heroImg={i.heroImg} title={i.title} overview={i.overview} link={i.liveUrl}/>
        </div>
      </Link>
    ))}
  </div>
)

const ProjectsGallery = () => (
  <Router>
    <Route component={ProjectsContainer} />
  </Router>
)

export default ProjectsGallery
