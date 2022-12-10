import React from 'react'
import {useContextGlobal} from '../Components/utils/global.context.jsx'
import Card from "../Components/Card"; 


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state, dentistas} = useContextGlobal()

  return (
    <main className={state.data} id='home'>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {console.log(dentistas)}
        {dentistas.map(item => <Card key={item.id} item={item}/>)}
      </div> 
    </main>
  )
}

export default Home