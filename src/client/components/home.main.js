import React from 'react'
import styles from './home.main.less'

function HomeMain (props) {
  return (
    <div>
      <p>Hi my name is Aaron Flower</p>
      <p>I am a Front End Developer because...</p>
      <p>I am passionate to understand what I don’t know and eager to create using the tools I do know.</p>
      <img className={styles.resume} src={require("../base/assets/resumeIcon.png")}/>
    </div>
  )
}

export default HomeMain
