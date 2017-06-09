import React from 'react'
import styles from './home.main.less'
import grid from 'flexboxgrid'

function HomeMain (props) {
  return (
    <div className={grid.row}>
      <div className={grid.colMd6}>
        <p>Hi my name is Aaron Flower</p>
        <p>I am a Front End Developer because...</p>
        <p>I am passionate to understand what I don’t know and eager to create using the tools I do know.</p>
      </div>
      <div className={grid.colMd3}>
        <a className={styles.resume} href={require("../base/assets/AaronFlowerResume.pdf")} download="AaronFlowerResume.pdf">
          <img src={require("../base/assets/resumeIcon.png")}/>
        </a>
      </div>
    </div>
  )
}

export default HomeMain
