import React from 'react'
import B1 from './B1'
import { createContext } from 'react'

export let mycontext =createContext()

const A1 = () => {
    let tech="salman sir react class"
  return (
    <mycontext.Provider value={"salman sir teaching overcoming of props drilling using createContext hook"}>
        <B1/>
    </mycontext.Provider>
  )
}

export default A1