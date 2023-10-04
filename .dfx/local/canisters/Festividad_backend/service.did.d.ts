import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

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
  'buscarUsuarios' : ActorMethod<[], Array<[string, Usuario]>>,
  'buscarUsuariosid' : ActorMethod<[string], [] | [Usuario]>,
  'crearUsuario' : ActorMethod<[Usuario], string>,
}
