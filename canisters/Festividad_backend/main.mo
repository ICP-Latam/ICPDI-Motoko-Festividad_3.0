import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import D "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
//import Identity "ic:canister/identity";
import Int "mo:base/Int";
//import Time "mo:base/Time";
import Principal "mo:base/Principal";

//Backend del canister

actor FestividadCanister {

  type Usuario = {
    nombre: Text;
    apellidop: Text;
    apellidom : Text;
    telefono : Text;
    redesS: Text;
    email: Text;
    tipo: Text; // "proveedor" o "cliente"
    //identidad: Principal; // Identidad de Internet Identity
  };
  type Indice = Nat;
  var indice: Indice = 0;
  let usuarios = HashMap.HashMap<Text, Usuario>(0, Text.equal, Text.hash);


  //var usuarios : [Usuario] = [];

  private func generateIUser() : Nat {
    indice += 1;
    return indice;
  };
  /*
  public query ({caller}) func jose() : async Principal {
    return caller;
  };*/

  public func crearUsuario(nombre:Text, apellidop:Text, apellidom:Text, telefono:Text, redesS:Text, email:Text, tipo:Text) : async () {
    let postuser = {nombre = nombre; apellidop = apellidop; apellidom = apellidom; telefono = telefono; redesS = redesS; email = email; tipo = tipo};

    let clave = Nat.toText(generateIUser());
    usuarios.put(clave, postuser);
    //identidad: Principal; // Identidad de Internet Identity
    D.print("Nuevo Usuario Creado: " # nombre);
    return ();
  };

  public query func buscarUsuarios () : async [(Text, Usuario)]{
    let userIter : Iter.Iter<(Text, Usuario)> = usuarios.entries();
    let userArray : [(Text, Usuario)] = Iter.toArray(userIter);
    return userArray;

  };

  public query func buscarUsuariosid (id: Text) : async ?Usuario {
    let user: ?Usuario = usuarios.get(id);
    return user;
  };

  
public func actualizarUsuario (id:Text, indice:Nat, nombre:Text, apellidop:Text, apellidom:Text, telefono:Text, redesS:Text, email:Text, tipo:Text) : async Bool {
    let user: ?Usuario= usuarios.get(id);

    switch (user) {
      case (null) {
        return false;
      };
      case (?currentuser) {
        let user: Usuario = {nombre = nombre; apellidop = apellidop; apellidom = apellidom; telefono = telefono; redesS = redesS; email = email; tipo = tipo};
        usuarios.put(id,user);
        //Debug.print("Updated post with ID: " # id);
        return true;
      };
    };

  };

  

  public func verificarCuentaUsuario(id:Text) : async Text {
    let user: ?Usuario = usuarios.get(id);
    if (user != null) {
      return "Cuenta de usuario verificada correctamente";
    } else {
      return "Cuenta de usuario no verificada";
    }
  };

  public func eliminarUsuario (id: Text) : async Bool {
		let user : ?Usuario = usuarios.get(id);
		switch (user) {
			case (null) {
				return false;
			};
			case (_) {
				ignore usuarios.remove(id);
				D.print("Ha sido eliminado el usuario con id: " # id);
				return true;
			};
		};
	};


  type Evento = {
    nombre: Text;
    descripcion: Text;
    precio: Int;
    reservacion: Int;
    fecha: Text;
    hora: Text;
  };

  private func generateIEvent() : Nat {
    indice += 1;
    return indice;
  };

  //var eventos : [Evento] = [];
  let eventos = HashMap.HashMap<Text, Evento>(0, Text.equal, Text.hash);

  public func crearEvento({ nombre; descripcion; precio; reservacion; fecha; hora } : Evento) : async Text {
    let postevent = {
      nombre = nombre;
      descripcion = descripcion;
      precio = precio;
      reservacion = reservacion;
      fecha = fecha;
      hora = hora;
    };

    let clave = Nat.toText(generateIEvent());
    eventos.put(clave, postevent);
    //identidad: Principal; // Identidad de Internet Identity
    return "Usuario agregado correctamente";
  };

  public func actualizarEvento(nombre : Text, descripcion : Text, precio : Int, reservacion : Int, fecha : Text, hora : Text, id : Text) : async Bool {
    let event : ?Evento = eventos.get(id);

    switch (event) {
      case (null) {
        return false;
      };
      case (?currentevent) {
        let event : Evento = {
          nombre = nombre;
          descripcion = descripcion;
          precio = precio;
          reservacion = reservacion;
          fecha = fecha;
          hora = hora;
        };
        eventos.put(id, event);
        //Debug.print("Updated post with ID: " # id);
        return true;
      };
    };

  };

  public func identificacionEvento(id : Text) : async Text {
    let event : ?Evento = eventos.get(id);
    if (event != null) {
      return "Evento identificado correctamente";
    } else {
      return "Evento no identificado";
    };
  };

  //Autorizar y buscar eventos
  public func autorizarEvento(id:Text):async Text {
    let event: ?Evento = eventos.get(id);
    if (event != null) {
      return "Evento autorizado correctamente";
    } else {
      return "Evento no autorizado";
    }
  };

  public query func buscarEventos () : async [(Text, Evento)]{
    let eventIter : Iter.Iter<(Text, Evento)> = eventos.entries();
    let eventArray : [(Text, Evento)] = Iter.toArray(eventIter);
    return eventArray;

  };

  public query func buscarEventosid (id: Text) : async ?Evento {
    let event: ?Evento = eventos.get(id);
    return event;
  };

  public func eliminarEvento (id: Text) : async Bool {
		let event : ?Evento = eventos.get(id);
		switch (event) {
			case (null) {
				return false;
			};
			case (_) {
				ignore eventos.remove(id);
				D.print("Ha sido eliminado el evento con id: " # id);
				return true;
			};
		};
	};

  public func calendarizacionEvento(id:Text):async Text {
    let event: ?Evento = eventos.get(id);
    if (event != null) {
      return "Evento calendarizado";
    } else {
      return "Evento no existente";
    }

  };

  
public func pagoEvento(id:Text):async Text {
    let event: ?Evento = eventos.get(id);
    if (event != null) {
      return "Pago realizado correctamente";
    } else {
      return "Pago no realizado por indice invalido";
    }
  };

};



