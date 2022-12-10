import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContextGlobal()

  const favs = localStorage.getItem('favs')
  const parsedFav = JSON.parse(favs)

  return (
    <div className={state.data} id='favs'>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}
      {parsedFav.map(item => <Card item={item}/>)}
      </div>
    </div>
  );
};

export default Favs;
