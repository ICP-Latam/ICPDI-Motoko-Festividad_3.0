// Importar las librerías necesarias
//import C "mo:base/canister";
//import C_id "mo:base/canister_id";
//import D "mo:base/data";
import Array "mo:base/Array";
import Text "mo:base/Text";
import EventStatus "mo:base/EventStatus";
import Time "mo:base/Time";
import Date "mo:base/Date";


// Definir el canister
actor FesT30 {
  
  // Definir el tipo de usuario
  type User = {
    name: Text;
    lastname: Text;
    email: Text;
    password: Text;
    verified: Text;
    tipo: Text;
 };

var userlist : [User] = [];

 // Función para ingresar datos del usuario
public func add_user({name; lastname; email; password;verified; tipo} : User): async Text{
// Crear un nuevo usuario
let user = {name= name; lastname= lastname; email= email; password= password; verified= verified; tipo= tipo};

userlist := Array.append(userlist, [user]);

return "User added";
}
/*
// Función auxiliar para obtener la lista de usuarios
  public query func getAllUsers() : async [User] {
  //Obtener la lista de usuarios
    return userlist;
  };


 // Función para verificar si el usuario es proveedor
public func is_provider(user: User): async bool {
   //Devuelve true si el tipo de usuario es proveedor
  return user.tipo == "provider";
};


  // Definir el canister ID del administrador
 //canister_id! admin_canister_id = "admin";
 //canister_id! admin_canister_id = canister_id("admin");

  
*/
  // Definir el tipo de evento
  type Event = {
    id: Text;
    name: Text;
    date: Text;
    time: Text;
    location: Text;
    description: Text;
    status: Text;
  };
  var eventlist : [Event] = [];
/*
  // Función para crear un evento
  public func create_event({name; date; time; location; description;}: Event): async Text{
    // Crear un nuevo evento
    let event = {id= generate_id();name= name; date: date;time: time; location= location; description= description; status= EventStatus.Pending};

    // Guardar el evento en la memoria
    eventlist := Array.append(eventlist, [event]);

    return "User added";
  };
  */
/*
   //Definir los posibles estados de un evento
  enum  EventStatus {
  Pending; Approved; Rejected
  }


   //Función auxiliar para obtener el evento
  public func get_event(name: Text): Event {
     //Obtener el evento de la memoria
    return events[name];
  };

  // Función para verificar si el usuario es proveedor
  public func is_provider(user: User): bool {
    // Devuelve true si el tipo de usuario es proveedor
    return user.type == "provider";
  };

  // Función para dar de baja al usuario
  public func delete_user(email: Text): bool {
  // Obtener el usuario de la memoria
  var user = users[email];

  // Si el usuario existe, eliminarlo
  if (user != null) {
    users.delete(email);
    return true;
  }

  // Si el usuario no existe, devolver false
  return false;
  };

  // Función para actualizar los datos del usuario
  public func update_user(email, name, lastname, password): bool {
  // Obtener el usuario de la memoria
  var user = users[email];

  // Si el usuario existe, actualizar sus datos
  if (user != null) {
    user.name = name;
    user.lastname = lastname;
    user.password = password;
    users[email] = user;
    return true;
  }

  // Si el usuario no existe, devolver false
  return false;
  };
*/

  
/*
  // Función para actualizar un evento
  public func update_event(
    id: Text,
    name: Text,
    date: Date,
    time: Time,
    location: Text,
    description: Text
  ): bool {
    // Obtener el evento de la memoria
    var event = get_event(id);

    // Si el evento existe, actualizar sus datos
    if (event != null) {
      event.name = name;
      event.date = date;
      event.time = time;
      event.location = location;
      event.description = description;
      events[id] = event;
      return true;
    }

    // Si el evento no existe, devolver false
    return false;
  };

  // Función para borrar un evento
  public func delete_event(id: Text): bool {
    // Obtener el evento de la memoria
    var event = get_event(id);

    // Si el evento existe, eliminarlo
    if (event != null) {
      events.delete(id);
      return true;
    }

    // Si el evento no existe, devolver false
    return false;
  };

  // Función para eliminar los datos del evento
public func delete_event(id: Text): bool {
  // Obtener el evento de la memoria
  var event = events[id];

  // Si el evento existe, eliminarlo
  if (event != null) {
    events.delete(id);
    return true;
  }

  // Si el evento no existe, devolver false
  return false;
};

// Función para autorizar el evento
public func authorize_event(id: Text): bool {
  // Obtener el evento de la memoria
  var event = events[id];

  // Si el evento existe y el usuario es proveedor, autorizarlo
  if (event != null && is_provider(get_caller())) {
    event.status = EventStatus.Approved;
    return true;
  }

  // Si el evento no existe o el usuario no es proveedor, devolver false
  return false;
};

// Función para calendarizar el evento
public func schedule_event(id: Text, date: Date, time: Time): bool {
  // Obtener el evento de la memoria
  var event = events[id];

  // Si el evento existe, actualizar su fecha y hora
  if (event != null) {
    event.date = date;
    event.time = time;
    return true;
  }

  // Si el evento no existe, devolver false
  return false;
};

// Función para pagar el evento
public func pay_event(id: Text, amount: Nat): bool {
  // Obtener el evento de la memoria
  var event = events[id];

  // Si el evento existe y el usuario es cliente, pagarlo
  if (event != null && !is_provider(get_caller())) {
    event.status = EventStatus.Paid;
    return true;
  }

  // Si el evento no existe o el usuario no es cliente, devolver false
  return false;
};*/
};