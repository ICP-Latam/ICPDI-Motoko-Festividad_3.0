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
    if (indice <= Array.size(usuarios)) {
      return "Índice de usuario inválido";
    };

    //usuarios[nombre].indice := nombre;
    /*usuarios[indice].apellido := apellido;
    usuarios[indice].email := email;
    usuarios[indice].tipo := tipo;
    usuarios[indice].identidad := identidad;*/

    return "Usuario actualizado correctamente";
  };
/*
  public query func buscarUsuario(nombre: Text) : async [Usuario] {
    var resultados : [Usuario] = [];
    for (nombre in usuarios) {
      if (usuarios.nombre == nombre) {
        resultados := [usuarios];
        break;
      }
    }
    return resultados;
  };*/

  public func verificarCuentaUsuario(indice: Nat) : async Text {
    if (indice >= Array.size(usuarios)) {
      return "Índice de usuario inválido";
    };

    //usuarios[indice].cuentaVerificada := true;

    return "Cuenta de usuario verificada correctamente";
  };


  //EVENTOS
  public func registrarDatosEvento({nombre; fecha} : Evento) : async Text {
    let evento = {nombre = nombre; fecha = fecha};
    eventos := Array.append(eventos, [evento]);
    return "Datos del evento registrados correctamente";
  };

  public func actualizarDatosEvento({nombre; fecha} : Evento, indice: Nat) : async Text {
    if (indice >= Array.size(eventos)) {
      return "Índice de evento inválido";
    };
/*
    eventos[indice].nombre := nombre;
    eventos[indice].fecha := fecha;*/

    return "Datos del evento actualizados correctamente";
  };

public func autorizarEvento(indice: Nat) : async Text {
    if (indice >= Array.size(eventos)) {
      return "Índice de evento inválido";
    };

    //Implementacion para autorizar el evento

    return "Evento autorizado correctamente";
  };
/*
  public func darDeBajaEvento(indice: Nat) : async Text {
  if (indice >= Array.size(eventos)) {
    return "Índice de evento inválido";
  };

  eventos := Array.remove(eventos, indice);

  return "Evento dado de baja correctamente";
};*/
};
  




/*
public query func buscarUsuario(nombre: Text) : async Text {
    var resultados : [Usuario] = [];
    for (nombre in usuarios) {
        if (usuarios.nombre == nombre) {
            usuarios := Array.append(usuarios, [usuario]);
            return true;
        }
    }

    return "hola";
  };
};

  p*/
/*
public func buscarYEliminarEvento(nombre: Text) : async Text {
    var eventoEncontrado = false;

    for (i in Iter.range(0, Array.length(eventos))) {
        if (evento.nombre == nombre) {
            eventoEncontrado == true;
            eventos := Array.remove(eventos, i);
        if (eventoEncontrado) {
          return "Evento eliminado";
        } else {
          return "Evento no encontrado";
    }
        }
    }
  

  public func calendarizarEvento({nombre; fecha} : Evento) : async Text {
    let evento = {nombre = nombre; fecha = fecha};
    eventos := Array.append(eventos, [evento]);
    return "Evento calendarizado correctamente";
  };
*//*
  public func realizarPagoEvento(indice: Nat) : async Text {
    if (indice >= Array.size(eventos)) {
      return "Índice de evento inválido";
    };

    // Implementa aquí la lógica para realizar el pago del evento

    return "Pago del evento realizado correctamente";
  };*/
/*
  public query func buscarEvento(nombre: Text) : async [Evento] {
    let resultados : [Evento] = [];
    for (evento in eventos) {
      if (evento.nombre == nombre) {
        resultados := Array.append(resultados, [evento]);
      }
    }
    
  };
*/