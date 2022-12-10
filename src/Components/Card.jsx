import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {useContextGlobal} from '../Components/utils/global.context.jsx'

const Card = ({item}) => {

  // Aqui iria la logica para agregar la Card en el localStorage
  const {fav, setFav} = useContextGlobal()

  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(fav))
  }, [fav])

  const addFav = ()=>{
    setFav([...fav, item])
  }

  const imagen = 'https://raw.githubusercontent.com/BautiLuciani/fe3-final/main/public/images/doctor.jpg'

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={imagen} alt="foto_doctor" />
        <h5 className="info">id: {item.id}</h5>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentist/${item.id}`}>
          <h3 className="info">{item.name}</h3>
          <h2 className="info">{item.username}</h2>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
