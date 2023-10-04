export const idlFactory = ({ IDL }) => {
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
    'buscarUsuarios' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Usuario))],
        ['query'],
      ),
    'buscarUsuariosid' : IDL.Func([IDL.Text], [IDL.Opt(Usuario)], ['query']),
    'crearUsuario' : IDL.Func([Usuario], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
