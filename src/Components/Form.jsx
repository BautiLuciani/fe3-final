import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const handleChange=(e)=>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(user.name.length > 6 && user.email.includes('@') && user.email.includes('.')){
      alert(`Gracias ${user.name}, te contactaremos cuando antes via email`)
    } else {
      alert("Por favor verifique su informacion nuevamente")
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Ingrese su nombre completo</label>
        <input type="text" name='name' onChange={handleChange}/>
        <label>Ingrese su email</label>
        <input type="text" name='email' onChange={handleChange}/>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
