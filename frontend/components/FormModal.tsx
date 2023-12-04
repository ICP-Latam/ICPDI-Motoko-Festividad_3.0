import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { useCanister } from '@connect2ic/react';
import FestividadItemUsr from './FestividadItemUsr';
import  FestividadItemEv  from "./FestividadItemEv";

function FormModal () {

    // Estado para el modal1
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Funciones para abrir y cerrar el modal del modal 1
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

   // Estado para el modal2
   const [modalIsOpen2, setModalIsOpen2] = useState(false);

   // Funciones para abrir y cerrar el modal
   // Funciones para abrir y cerrar el modal

   const openModal2 = async () => {
    console.log("Abriendo modal y buscando usuarios...");
    await handleBuscarUsr(); // Realiza la búsqueda al abrir el modal
    setModalIsOpen2(true);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };


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

    const [usuarios, setUsuarios] = useState([]);
    const [eventos, setEventos] = useState([]);

    const [nombre,setnombre] = useState('')
    const [apellidop,setapellidop] = useState('')
    const [apellidom,setapellidom] = useState('')
    const [telefono,settelefono] = useState('')
    const [redesS,setredesS] = useState('')
    const [email,setemail] = useState('')
    const [tipo,settipo] = useState('')

    const [nombreEv,setnombreEv] = useState('')
    const [descripcion,setdescripcion] = useState('')
    const [precio,setprecio] = useState('')
    const [reservacion,setreservacion] = useState('')
    const [fecha,setfecha] = useState('')
    const [hora,sethora] = useState('')

    const handleBuscarUsr = async () => {
        try {
            const result = await Festividad_backend.buscarUsuarios();
            setUsuarios(result.sort((a, b) => parseInt(a[0]) - parseInt(b[0])));  // Ordenar posts por ID

            

        } catch(e) {
            console.log(e);
        }
    }

    const handleSubmitUsr = async (e) =>{
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

 return (
    <div>
      {/* Otros componentes */}
      <button onClick={openModal}>Agregar Usuario</button>
      <button onClick={openModal2}>Buscar Usuario</button>

      <button onClick={openModal3}>Agregar Evento</button>

      <button onClick={openModal4}>Buscar Evento</button>


    <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal 1">

    <form onSubmit={handleSubmitUsr}>
        <button onClick={closeModal}>X</button>
        {/* Campos del formulario */}
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
    </form>

    

    </Modal>

    {/* Buscar Usuario */}
    <Modal isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        contentLabel="Modal 2">
                {usuarios.map((usuario) => {
                    return(<FestividadItemUsr key={usuario[0]} usuario={usuario} refresh={handleBuscarUsr} />);
                })}
    </Modal>

    
    

    <Modal isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        contentLabel="Modal 3">

        <button onClick={closeModal3}>X</button>
        {/* Campos del formulario */}
        <form onSubmit={handleSubmitEv}>
        <div>
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
        <br></br><br></br><button type="submit">Enviar</button>
        </div>
        </form>
    </Modal>
    <Modal isOpen={modalIsOpen4}
        onRequestClose={closeModal4}
        contentLabel="Modal 4">
               {eventos.map((Evento) => {
                    return(<FestividadItemEv key={Evento[0]} Evento={Evento} refresh={handleBuscarEv} />);
                })}
    </Modal>
    {/* Actualizar y Eliminar Usuario */}
    
    

    </div>
  );
}


export default FormModal;