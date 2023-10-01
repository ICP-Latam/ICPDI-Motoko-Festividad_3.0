import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import D "mo:base/Debug";
//import Identity "ic:canister/identity";
import Principal "mo:base/Principal";



actor FestividadCanister {
  
  type Usuario = {
    nombre: Text;
    apellido: Text;
    email: Text;
    tipo: Text; // "proveedor" o "cliente"
    identidad: Principal; // Identidad de Internet Identity
    //cuentaVerificada: Bool; // Indica si la cuenta del usuario está verificada
  };

  type Evento = {
    nombre: Text;
    fecha: Text;
    // Agrega aquí más campos de datos del evento según tus necesidades
  };

  var usuarios : [Usuario] = [];
  var eventos : [Evento] = [];

  public func agregarUsuario({nombre; apellido; email; tipo; identidad} : Usuario) : async Text {
    let usuario = {nombre = nombre; apellido = apellido; email = email; tipo = tipo; identidad = identidad};
    usuarios := Array.append(usuarios, [usuario]);
    return "Usuario agregado correctamente";
  };



  public func actualizarUsuario({nombre; apellido; email; tipo; identidad} : Usuario, indice: Nat) : async Text {
    if (indice >= Array.size(usuarios)) {
      return "Índice de usuario inválido";
    };

    return "Usuario actualizado correctamente";
  };

  //pendiente
  public func EliminarUsuario() : async Text {
  /*if (indice >= Array.size(usuarios)) {
    return "Índice de usuario inválido";
  };*/
  usuarios := [];
  //D.print("Usuarios eliminados");
    //return true;
  return "Usuario eliminado correctamente";
};

  public func verificarCuentaUsuario(indice: Nat) : async Text {
    if (indice >= Array.size(usuarios)) {
      return "Índice de usuario inválido";
    };

    //usuarios[indice].cuentaVerificada := true;

    return "Cuenta de usuario verificada correctamente";
  };


public query func buscarUsuarioPorIndice(indice: Nat) : async Text {
    if (indice >= Array.size(usuarios)) {
      return "Indice Invalido";
    };
    let user = usuarios[indice];
    return user.nombre;
};

  public func identificacionUsuario(indice:Nat):async Text {
    if (indice >= Array.size(eventos)) {
      return "Usuario no identificado";
    };
    
    
    
  return "Usuario identificado";  
  };



  //EVENTOS
  public func registrarDatosEvento({nombre; fecha} : Evento) : async Text {
    let evento = {nombre = nombre; fecha = fecha};
    eventos := Array.append(eventos, [evento]);
    return "Datos del evento registrados correctamente";
  };

  public func actualizarDatosEvento({nombre; fecha} : Evento, indice: Nat) : async Text {
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

  public query func buscarEvento(indice: Nat) : async Text {
    if (indice >= Array.size(eventos)) {
      return "Indice Invalido";
    };
    let event = eventos[indice];
    return event.nombre;
    
  };

  //pendiente
  public func EliminarEvento() : async Text {
  /*if (indice >= Array.size(eventos)) {
    return "Índice de evento inválido";
  };*/
  eventos := [];
  return "Evento eliminado correctamente";
};

public func calendarizarEvento({nombre; fecha} : Evento) : async Text {
    let evento = {nombre = nombre; fecha = fecha};
    eventos := Array.append(eventos, [evento]);
    return "Evento calendarizado correctamente";
};

//pendiente
public func realizarPagoEvento(indice: Nat) : async Text {
    if (indice >= Array.size(eventos)) {
      return "Índice de evento inválido";
    };


    return "Pago del evento realizado correctamente";
  };

};

  
  


  
