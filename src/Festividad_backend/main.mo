// Importar las librerías necesarias
import "ic/core/ canister.ic";
import "ic/core/ canister_id.ic";
import "ic/core/ data.ic";

// Definir el canister
actor FesT30 {
  
  // Definir el tipo de usuario
  //type User {
  //  name: string;
  //  lastname: string;
  //  email: string;
  //  password: string;
  //  verified: bool;
   // type: string;
  //}

  // Definir el tipo de evento
  //type Event {
  //  id: string;
  //  name: string;
  //  date: Date;
   // time: Time;
   // location: string;
   // description: string;
  //  status: EventStatus;
 // }

  // Definir los posibles estados de un evento
  //enum EventStatus {
  //  Pending,
 //   Approved,
  //  Rejected
  //}

  // Definir el canister ID del administrador
 // canister_id! admin_canister_id = "admin";

  // Función auxiliar para obtener la lista de usuarios
 // public fun get_users(): [User] {
    // Obtener la lista de usuarios
  //  return users.values();
  //}

  // Función auxiliar para obtener el evento
 // public fun get_event(id: string): Event {
    // Obtener el evento de la memoria
 //   return events[id];
 //}

  // Función para ingresar datos del usuario
  public fun add_user(
    name: string,
    lastname: string,
    email: string,
    password: string,
    type: string
  ): User {
    // Crear un nuevo usuario
    var user = User(
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      verified: false,
      type: type
    );

    // Guardar el usuario en la memoria
    users[user.email] = user;

    // Devolver el usuario
    return user;
  }
/*
  // Función para verificar si el usuario es proveedor
  public fun is_provider(user: User): bool {
    // Devuelve true si el tipo de usuario es proveedor
    return user.type == "provider";
  }

// Función para dar de baja al usuario
public fun delete_user(email: string): bool {
  // Obtener el usuario de la memoria
  var user = users[email];

  // Si el usuario existe, eliminarlo
  if (user != null) {
    users.delete(email);
    return true;
  }

  // Si el usuario no existe, devolver false
  return false;
}

// Función para actualizar los datos del usuario
public fun update_user(
  email: string,
  name: string,
  lastname: string,
  password: string
): bool {
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
}

  // Función para crear un evento
  public fun create_event(
    name: string,
    date: Date,
    time: Time,
    location: string,
    description: string
  ): Event {
    // Crear un nuevo evento
    var event = Event(
      id: generate_id(),
      name: name,
      date: date,
      time: time,
      location: location,
      description: description,
      status: EventStatus.Pending
    );

    // Guardar el evento en la memoria
    events[event.id] = event;

    // Devolver el evento
    return event;
  }

  // Función para actualizar un evento
  public fun update_event(
    id: string,
    name: string,
    date: Date,
    time: Time,
    location: string,
    description: string
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
  }

  // Función para borrar un evento
  public fun delete_event(id: string): bool {
    // Obtener el evento de la memoria
    var event = get_event(id);

    // Si el evento existe, eliminarlo
    if (event != null) {
      events.delete(id);
      return true;
    }

    // Si el evento no existe, devolver false
    return false;
  }

  // Función para eliminar los datos del evento
public fun delete_event(id: string): bool {
  // Obtener el evento de la memoria
  var event = events[id];

  // Si el evento existe, eliminarlo
  if (event != null) {
    events.delete(id);
    return true;
  }

  // Si el evento no existe, devolver false
  return false;
}

// Función para autorizar el evento
public fun authorize_event(id: string): bool {
  // Obtener el evento de la memoria
  var event = events[id];

  // Si el evento existe y el usuario es proveedor, autorizarlo
  if (event != null && is_provider(get_caller())) {
    event.status = EventStatus.Approved;
    return true;
  }

  // Si el evento no existe o el usuario no es proveedor, devolver false
  return false;
}

// Función para calendarizar el evento
public fun schedule_event(id: string, date: Date, time: Time): bool {
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
}

// Función para pagar el evento
public fun pay_event(id: string, amount: Nat): bool {
  // Obtener el evento de la memoria
  var event = events[id];

  // Si el evento existe y el usuario es cliente, pagarlo
  if (event != null && !is_provider(get_caller())) {
    event.status = EventStatus.Paid;
    return true;
  }

  // Si el evento no existe o el usuario no es cliente, devolver false
  return false;
}*/
}