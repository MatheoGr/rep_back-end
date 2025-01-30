import zod from 'zod';

const articuloSchema = zod.object({
    id: zod.number(),
    titulo: zod.string(),
    cuerpo: zod.string(),
    usuario: zod.string(),
});

const usuarioSchema = zod.object({
    id: zod.number(),
    nombre: zod.string(),
    email: zod.string().email(),
    rol: zod.string(),
});

const clienteSchema = zod.object({
    id: zod.number(),
    nombre: zod.string(),
    direccion: zod.string(),
    telefono: zod.string(),
});

export const validarArticulo = (articulo) => {
    return articuloSchema.safeParse(articulo);
};

export const validarParcial = (articulo) => {
    return articuloSchema.partial().safeParse(articulo);
};

export const validarUsuario = (usuario) => {
    return usuarioSchema.safeParse(usuario);
};

export const validarParcialUsuario = (usuario) => {
    return usuarioSchema.partial().safeParse(usuario);
};

export const validarCliente = (cliente) => {
    return clienteSchema.safeParse(cliente);
};

export const validarParcialCliente = (cliente) => {
    return clienteSchema.partial().safeParse(cliente);
};