import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const {id} = useParams()
  const {state} = useContextGlobal()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [especifico, setEspecifico] = useState()

  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setEspecifico(res.data))
  },[id])

  if(!especifico) return "Cargando..." 
  return (
    <div className={state.data} id='detalles'>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h3><span>Nombre:</span> {especifico.name}</h3>
      <h3><span>Email:</span>{especifico.email}</h3>
      <h3><span>Telefono:</span>{especifico.phone}</h3>
      <h3><span>Pagina Web:</span>{especifico.website}</h3>
    </div>
  )
}

export default Detail