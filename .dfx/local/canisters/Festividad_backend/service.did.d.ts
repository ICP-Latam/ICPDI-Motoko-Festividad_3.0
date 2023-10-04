import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Evento {
  'nombre' : string,
  'hora' : string,
  'descripcion' : string,
  'reservacion' : bigint,
  'precio' : bigint,
  'fecha' : string,
}
export interface Usuario {
  'nombre' : string,
  'tipo' : string,
  'identidad' : Principal,
  'email' : string,
  'telefono' : bigint,
  'redesS' : string,
  'apellidom' : string,
  'apellidop' : string,
}
export interface _SERVICE {
  'actualizarEvento' : ActorMethod<
    [string, string, bigint, bigint, string, string, string],
    boolean
  >,
  'actualizarUsuario' : ActorMethod<
    [
      string,
      bigint,
      string,
      string,
      string,
      bigint,
      string,
      string,
      string,
      Principal,
    ],
    boolean
  >,
  'autorizarEvento' : ActorMethod<[string], string>,
  'buscarEventos' : ActorMethod<[], Array<[string, Evento]>>,
  'buscarEventosid' : ActorMethod<[string], [] | [Evento]>,
  'buscarUsuarios' : ActorMethod<[], Array<[string, Usuario]>>,
  'buscarUsuariosid' : ActorMethod<[string], [] | [Usuario]>,
  'calendarizacionEvento' : ActorMethod<[string], string>,
  'crearEvento' : ActorMethod<[Evento], string>,
  'crearUsuario' : ActorMethod<[Usuario], string>,
  'identificacionEvento' : ActorMethod<[string], string>,
  'pagoEvento' : ActorMethod<[string], string>,
  'verificarCuentaUsuario' : ActorMethod<[string], string>,
}
