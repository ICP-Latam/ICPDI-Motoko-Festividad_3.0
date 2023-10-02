import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import D "mo:base/Debug";
//import Identity "ic:canister/identity";
import Int "mo:base/Int";
//import Time "mo:base/Time";
import Principal "mo:base/Principal";



actor FestividadCanister {
  
  type Usuario = {
    nombre: Text;
    apellidop: Text;
    apellidom : Text;
    telefono : Int;
    redesS: Text;
    email: Text;
    tipo: Text; // "proveedor" o "cliente"
    identidad: Principal; // Identidad de Internet Identity
  };

 

  var usuarios : [Usuario] = [];

  public func agregarUsuario({nombre; apellidop; apellidom; telefono; redesS; email; tipo; identidad} : Usuario) : async Text {
    let usuario = {nombre = nombre; apellidop = apellidop; apellidom = apellidom; telefono = telefono; redesS = redesS; email = email; tipo = tipo; identidad = identidad};
    usuarios := Array.append(usuarios, [usuario]);
    return "Usuario agregado correctamente";
  };


  public func actualizarUsuario({nombre; apellidop; apellidom; telefono; redesS; email; tipo; identidad} : Usuario, indice: Nat) : async Text {
    if (indice >= Array.size(usuarios)) {
      return "Índice de usuario inválido";
    };

    return "Usuario actualizado correctamente";
  };

  //pendiente por perfeccionar
  public func EliminarUsuario() : async Text {
  /*if (indice >= Array.size(usuarios)) {
      return "Índice de usuario inválido";
    };*/
  /*var usuariosEncontrados : [Usuario] = Array.filter(usuarios, func(u : Usuario) : Bool {
    return u.nombre == nombre;
  });
  usuariosEncontrados := [];*/
  usuarios := [];
  return "Usuarios eliminados exitosamente";
};

  public func verificarCuentaUsuario(indice: Nat) : async Text {
    if (indice >= Array.size(usuarios)) {
      return "Índice de usuario inválido";
    };

    //usuarios[indice].cuentaVerificada := true;

    return "Cuenta de usuario verificada correctamente";
  };


public query func buscarUsuario(indice: Nat) : async Text {
    if (indice >= Array.size(usuarios)) {
      return "Indice Invalido";
    };
    let user = usuarios[indice];
    return user.nombre;
};

  public func identificacionUsuario(indice:Nat):async Text {
    if (indice >= Array.size(usuarios)) {
      return "Usuario no identificado";
    };
    
    
    
  return "Usuario identificado";  
  };



  //EVENTOS


   type Evento = {
    nombre: Text;
    descripcion: Text;
    precio: Int;
    reservacion: Int;
    fecha: Text;
    hora: Text;
  };

var eventos : [Evento] = [];

  public func registrarDatosEvento({nombre; descripcion; precio; reservacion; fecha; hora} : Evento) : async Text {
    let evento = {nombre = nombre; descripcion = descripcion; precio = precio; reservacion = reservacion; fecha = fecha; hora = hora};
    eventos := Array.append(eventos, [evento]);
    return "Datos del evento registrados correctamente";
  };

  public func actualizarDatosEvento({nombre; descripcion; precio; reservacion; fecha; hora} : Evento, indice: Nat) : async Text {
    if (indice <= Array.size(eventos)) {
      return "Evento no identificado";
    };

    return "Datos del evento actualizados correctamente";
  };



public func autorizarEvento(indice: Nat) : async Text {
    if (indice >= Array.size(eventos)) {
      return "Índice de evento inválido";
    };

    //Implementacion para autorizar el evento

    return "Evento autorizado correctamente";
  };

public func identificacionEvento(indice:Nat):async Text {
    if (indice >= Array.size(eventos)) {
      return "Usuario no identificado";
    };
    
    
  return "Evento identificado";  
  };

//pendiente por perfeccionar
  public query func buscarEvento(indice: Nat) : async Text {
    if (indice >= Array.size(eventos)) {
      return "Indice Invalido";
    };
    let event = eventos[indice];
    return event.nombre;
    
  };

  //pendiente por perfeccionar
  public func EliminarEvento() : async Text {
  
  eventos := [];
  return "Evento eliminado correctamente";
};

public func calendarizarEvento({nombre; descripcion; precio; reservacion; fecha; hora} : Evento) : async Text {
    let evento = {nombre = nombre; precio = precio; descripcion = descripcion; fecha = fecha; hora = hora; reservacion = reservacion};
    eventos := Array.append(eventos, [evento]);
    return "Evento calendarizado correctamente";
};

//pendiente por acabar
public func realizarPagoEvento(indice: Nat) : async Text {
    if (indice >= Array.size(eventos)) {
      return "Índice de evento inválido";
    };


    return "Pago del evento realizado correctamente";
  };

};

  
  


  
