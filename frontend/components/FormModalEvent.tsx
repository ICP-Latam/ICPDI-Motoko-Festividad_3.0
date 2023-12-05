import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { useCanister } from '@connect2ic/react';
import  FestividadItemEv  from "./FestividadItemEv";
import './estilos.css';

function Eventos () {
     // Estado para el modal3
  const [modalIsOpen3, setModalIsOpen3] = useState(false);

  // Funciones para abrir y cerrar el modal del modal 1
  const openModal3 = () => {
    setModalIsOpen3(true);
  };

  const closeModal3 = () => {
    setModalIsOpen3(false);
  };

   // Estado para el modal2
   const [modalIsOpen4, setModalIsOpen4] = useState(false);

   // Funciones para abrir y cerrar el modal
   const openModal4 = async () => {
    console.log("Abriendo modal y buscando eventos...");
    await handleBuscarEv(); // Realiza la búsqueda al abrir el modal
    setModalIsOpen4(true);
  };

  const closeModal4 = () => {
    setModalIsOpen4(false);
  };
      

    const [Festividad_backend] = useCanister("Festividad_backend");

    const [eventos, setEventos] = useState([]);

    const [nombreEv,setnombreEv] = useState('')
    const [descripcion,setdescripcion] = useState('')
    const [precio,setprecio] = useState('')
    const [reservacion,setreservacion] = useState('')
    const [fecha,setfecha] = useState('')
    const [hora,sethora] = useState('')

    const handleBuscarEv = async () => {
        try {
            const result = await Festividad_backend.buscarEventos();
            setEventos(result.sort((a, b) => parseInt(a[0]) - parseInt(b[0])));  // Ordenar posts por ID

        } catch(e) {
            console.log(e);
        }
    }

    const handleSubmitEv = async (e) =>{
        e.preventDefault();
        try{
            const result = await Festividad_backend.crearEvento(
                nombreEv,
                descripcion,
                precio,
                reservacion,
                fecha,
                hora)
            console.log(result)
        }catch(error){
            console.error(error)
        }
        
    }

    const modalContentClass = eventos.length > 1 ? 'many-records' : '';

 return (
    <div>
      {/* Otros componentes */}

      <button className='button' onClick={openModal3}>Agregar Evento</button>

      <button className='button' onClick={openModal4}>Buscar Evento</button>   
    

    <Modal isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        contentLabel="Modal 3"
        className="custom-modal">

        <button className="modal-items-button" onClick={closeModal3}>X</button>
        {/* Campos del formulario */}
        <form onSubmit={handleSubmitEv}>
        <div>
        <br></br><br></br><label id="modal-items-text">Introduce el nombre</label>
        <br></br><input id="nombreEv"  className="modal-items"placeholder='Nombre' value={nombreEv} onChange={(e) => setnombreEv(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la descripcion</label>
        <br></br><input id="descripcion"  className="modal-items"placeholder='Descripcion' value={descripcion} onChange={(e) => setdescripcion(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el precio</label>
        <br></br><input id="precio"  className="modal-items"placeholder='Precio' value={precio} onChange={(e) => setprecio(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el numero de reservaciones</label>
        <br></br><input id="reservacion" className="modal-items" placeholder='Reservacion' value={reservacion} onChange={(e) => setreservacion(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la fecha</label>
        <br></br><input id="fecha" className="modal-items"placeholder='Fecha' value={fecha} onChange={(e) => setfecha(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la hora</label>
        <br></br><input id="hora" className="modal-items" placeholder='Hora' value={hora} onChange={(e) => sethora(e.target.value)}/>
        <br></br><br></br><button id='button' type="submit">Enviar</button>
        </div>
        </form>
    </Modal>
    {/* Buscar Evento */}
    <Modal isOpen={modalIsOpen4}
        onRequestClose={closeModal4}
        contentLabel="Modal 4"
        className={`custom-modal modal-content ${modalContentClass}`}>
        <button className="modal-items-button" onClick={closeModal4}>X</button>
               <div className="user-records-container">
    {eventos.map((Evento) => (
<div key={Evento[0]} className="user-record">
  <FestividadItemEv Evento={Evento} refresh={handleBuscarEv} />
  </div>
))}
</div>
</Modal>
</div>
    
  );
}


export default Eventos;