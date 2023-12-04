import { useCanister } from "@connect2ic/react";
import React, { useState } from "react";



function FestividadItemEv (props) {
    const { Evento , refresh} = props;

    const [Festividad_backend] = useCanister("Festividad_backend");

    const [nombreEv,setnombreEv] = useState(Evento[1].nombreEv)
    const [descripcion,setdescripcion] = useState(Evento[1].descripcion)
    const [precio,setprecio] = useState(Evento[1].precio)
    const [reservacion,setreservacion] = useState(Evento[1].reservacion)
    const [fecha,setfecha] = useState(Evento[1].fecha)
    const [hora,sethora] = useState(Evento[1].hora)

    const [visible, setVisible] = useState(false);

    const [update, setUpdate] = useState(false);


    const handleUpdateEv = async (evento) => {
        evento.preventDefault();

        try {
            await Festividad_backend.actualizarEvento(
                Evento[0],
                nombreEv,
                descripcion,
                precio,
                reservacion,
                fecha,
                hora);
            await refresh();
        } catch(e) {
            console.log(e);
        } finally {
            setVisible(false);
        }
    }

    const handleDeleteEv = async (evento) => {
        evento.preventDefault();
        try {
            await Festividad_backend.eliminarEvento(Evento[0]);
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
        <br></br><label>Actualizar Evento</label>
        <br></br><br></br><label>Introduce el nombre</label>
        <br></br><input id="nombreEv" placeholder='Nombre' value={nombreEv} onChange={(e) => setnombreEv(e.target.value)}/>
        <br></br><label>Introduce la descripcion</label>
        <br></br><input id="descripcion" placeholder='Descripcion' value={descripcion} onChange={(e) => setdescripcion(e.target.value)}/>
        <br></br><label>Introduce el precio</label>
        <br></br><input id="precio" placeholder='Precio' value={precio} onChange={(e) => setprecio(e.target.value)}/>
        <br></br><label>Introduce el numero de reservaciones</label>
        <br></br><input id="reservacion" placeholder='Reservacion' value={reservacion} onChange={(e) => setreservacion(e.target.value)}/>
        <br></br><label>Introduce la fecha</label>
        <br></br><input id="fecha" placeholder='Fecha' value={fecha} onChange={(e) => setfecha(e.target.value)}/>
        <br></br><label>Introduce la hora</label>
        <br></br><input id="hora" placeholder='Hora' value={hora} onChange={(e) => sethora(e.target.value)}/>
        <br></br><br></br><button onClick={handleUpdateEv}>Actualizar</button>
        </div>

        <div>
                <button onClick={() => setVisible(true)}>Editar</button>
                <button onClick={handleDeleteEv}>Borrar</button>
        </div>
        

        
    </div>
  )
}

export default FestividadItemEv;