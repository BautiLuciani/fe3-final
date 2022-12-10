import React from 'react'
import { Link } from 'react-router-dom'
import {useContextGlobal} from '../Components/utils/global.context.jsx'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispach} = useContextGlobal()

  return (
    <nav className = {state.data}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='logoDH'>
        <h3>Digital<span>HOUSE</span></h3>
      </div>
      <div className='links'>
        <Link to='/'><h3 id='opciones'>Home</h3></Link>
        <Link to='/favs'><h3 id='opciones'>Favs</h3></Link>
        <Link to='/contact'><h3 id='opciones'>Contacto</h3></Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        {state.theme === 'light' ?
        <button className='btnDark' onClick={()=> dispach({type: 'SWITCH_DARK', color: 'dark'})}>Change theme</button>
        :
        <button className='btnLight' onClick={()=> dispach({type: 'SWITCH_LIGHT', color: 'light'})}>Change theme</button>
        }
      </div>
    </nav>
  )
}

export default Navbar