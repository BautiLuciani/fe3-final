import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {

  const {state} = useContextGlobal()

  return (
    <footer className={state.data}>
        <p>Powered by</p>
        <h3>Digital<span>HOUSE</span></h3>
    </footer>
  )
}

export default Footer
