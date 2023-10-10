import React from 'react'
import B from './B'
import { createContext } from 'react'


const A = () => {
    let tech="salman sir teaching props drilling"
  return (
    <B tech={tech}/>
  )
}

export default A