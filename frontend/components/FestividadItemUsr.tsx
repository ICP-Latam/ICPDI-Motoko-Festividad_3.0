import { useCanister } from "@connect2ic/react";
import React, { useState } from "react";



function FestividadItemUsr (props) {
    const { usuario, refresh} = props;

    const [Festividad_backend] = useCanister("Festividad_backend");

    const [nombre,setnombre] = useState(usuario[1].nombre)
    const [apellidop,setapellidop] = useState(usuario[1].apellidop)
    const [apellidom,setapellidom] = useState(usuario[1].apellidom)
    const [telefono,settelefono] = useState(usuario[1].telefono)
    const [redesS,setredesS] = useState(usuario[1].redesS)
    const [email,setemail] = useState(usuario[1].email)
    const [tipo,settipo] = useState(usuario[1].tipo)

    const [visible, setVisible] = useState(false);

    const [update, setUpdate] = useState(false);

    const handleUpdateUsr = async (evento) => {
        evento.preventDefault();

        try {
            await Festividad_backend.actualizarUsuario(
                usuario[0], 
                nombre,
                apellidop,
                apellidom,
                telefono,
                redesS,
                email,
                tipo);
            await refresh();
        } catch(e) {
            console.log(e);
        } finally {
            setVisible(false);
        }
    }

    const handleDeleteUsr = async (evento) => {
        evento.preventDefault();
        try {
            await Festividad_backend.eliminarUsuario(usuario[0]);
            await refresh();
        } catch(e) {
            console.log(e);
        } finally {
            setVisible(false);
        }
    }


  return (
    <div>
        <div>
        <br></br><label>Actualizar Usuario</label>
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
        <button onClick={handleUpdateUsr}>Actualiar</button>
        </div>

        <div>
                <button onClick={() => setVisible(true)}>Editar</button>
                <button onClick={handleDeleteUsr}>Borrar</button>
        </div>

    </div>
  )
}

export default FestividadItemUsr;