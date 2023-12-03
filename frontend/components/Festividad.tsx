import { useCanister } from '@connect2ic/react';
import React, { useEffect, useState } from 'react';

function Festividad() {
    const [Festividad_backend] = useCanister("Festividad_backend");

    const [nombre,setnombre] = useState('')
    const [apellidop,setapellidop] = useState('')
    const [apellidom,setapellidom] = useState('')
    const [telefono,settelefono] = useState('')
    const [redesS,setredesS] = useState('')
    const [email,setemail] = useState('')
    const [tipo,settipo] = useState('')
    
   /* useEffect(()=>{

    })*/


    const handleSubmit = async (e) =>{
        e.preventDefault();
       
        try{
         

            const result = await Festividad_backend.crearUsuario(
                nombre,
                apellidop,
                apellidom,
                telefono,
                redesS,
                email,
                tipo)
            console.log(result)
        }catch(error){
            console.error(error)
        }
        
    }




  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
        <br></br><label>Registrar Usuario</label>
        <br></br><br></br><label>Introduce el nombre</label>
        <br></br><input id="nombre" placeholder='Nombre' value={nombre} onChange={(e) => setnombre(e.target.value)}/>
        <br></br><label>Introduce el Apellido Paterno</label>
        <br></br><input id="apellidop" placeholder='Apellido Paterno' value={apellidop} onChange={(e) => setapellidop(e.target.value)}/>
        <br></br><label>Introduce el Apellido Materno</label>
        <br></br><input id="apellidom" placeholder='Apellido Materno' value={apellidom} onChange={(e) => setapellidom(e.target.value)}/>
        <br></br><label>Introduce el teléfono</label>
        <br></br><input id="telefono" placeholder='Teléfono' value={telefono} onChange={(e) => settelefono(e.target.value)}/>
        <br></br><label>Introduce la red Social</label>
        <br></br><input id="redesS" placeholder='Redes Sociales' value={redesS} onChange={(e) => setredesS(e.target.value)}/>
        <br></br><label>Introduce el correo</label>
        <br></br><input id="email" placeholder='Correo' value={email} onChange={(e) => setemail(e.target.value)}/>
        <br></br><label>Introduce el tipo de usuario</label>
        <br></br><input id="tipo" placeholder='Tipo' value={tipo} onChange={(e) => settipo(e.target.value)}/>
        <br></br><br></br><button type="submit">Enviar</button>
        </div>
        </form>


    </div>
  )
}

export default Festividad;