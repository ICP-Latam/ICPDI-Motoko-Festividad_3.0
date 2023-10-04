export const idlFactory = ({ IDL }) => {
  const Evento = IDL.Record({
    'nombre' : IDL.Text,
    'hora' : IDL.Text,
    'descripcion' : IDL.Text,
    'reservacion' : IDL.Int,
    'precio' : IDL.Int,
    'fecha' : IDL.Text,
  });
  const Usuario = IDL.Record({
    'nombre' : IDL.Text,
    'tipo' : IDL.Text,
    'identidad' : IDL.Principal,
    'email' : IDL.Text,
    'telefono' : IDL.Int,
    'redesS' : IDL.Text,
    'apellidom' : IDL.Text,
    'apellidop' : IDL.Text,
  });
  return IDL.Service({
    'actualizarEvento' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Int, IDL.Int, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
    'actualizarUsuario' : IDL.Func(
        [
          IDL.Text,
          IDL.Nat,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Int,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Principal,
        ],
        [IDL.Bool],
        [],
      ),
    'autorizarEvento' : IDL.Func([IDL.Text], [IDL.Text], []),
    'buscarEventos' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Evento))],
        ['query'],
      ),
    'buscarEventosid' : IDL.Func([IDL.Text], [IDL.Opt(Evento)], ['query']),
    'buscarUsuarios' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Usuario))],
        ['query'],
      ),
    'buscarUsuariosid' : IDL.Func([IDL.Text], [IDL.Opt(Usuario)], ['query']),
    'calendarizacionEvento' : IDL.Func([IDL.Text], [IDL.Text], []),
    'crearEvento' : IDL.Func([Evento], [IDL.Text], []),
    'crearUsuario' : IDL.Func([Usuario], [IDL.Text], []),
    'identificacionEvento' : IDL.Func([IDL.Text], [IDL.Text], []),
    'pagoEvento' : IDL.Func([IDL.Text], [IDL.Text], []),
    'verificarCuentaUsuario' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
