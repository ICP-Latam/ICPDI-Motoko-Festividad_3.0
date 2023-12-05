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
        <br></br><label>Evento: {nombreEv}</label>
        <br></br><br></br><label id="modal-items-text">Introduce el nombre</label>
        <br></br><input id="nombreEv" className="modal-items2" placeholder='Nombre' value={nombreEv} onChange={(e) => setnombreEv(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la descripcion</label>
        <br></br><input id="descripcion" className="modal-items2" placeholder='Descripcion' value={descripcion} onChange={(e) => setdescripcion(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el precio</label>
        <br></br><input id="precio" className="modal-items2" placeholder='Precio' value={precio} onChange={(e) => setprecio(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el numero de reservaciones</label>
        <br></br><input id="reservacion" className="modal-items2" placeholder='Reservacion' value={reservacion} onChange={(e) => setreservacion(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la fecha</label>
        <br></br><input id="fecha" className="modal-items2" placeholder='Fecha' value={fecha} onChange={(e) => setfecha(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la hora</label>
        <br></br><input id="hora" className="modal-items2" placeholder='Hora' value={hora} onChange={(e) => sethora(e.target.value)}/>
        <br></br><br></br>
        
        <div style={{display:'flex' ,flexDirection:'row'}}>
        <button  id='button'onClick={handleUpdateEv}>Actualizar</button>
                <button id='button' onClick={handleDeleteEv}>Borrar</button>
        </div>
        </div>

        
        

        
    </div>
  )
}

export default FestividadItemEv;