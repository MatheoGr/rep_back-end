import { usuarios } from "../datos/usuario.js";
let usuariosDevolver = usuarios;

export class Usuario {
    static getAll() {
        return usuariosDevolver;
    }

    static getOneByID(id) {
        return usuariosDevolver.find(usuario => usuario.id == id);
    }

    static delete(id) {
        const usuarioIndex = usuariosDevolver.findIndex(usuario => usuario.id == id);
        if (usuarioIndex !== -1) {
            const [deletedUsuario] = usuariosDevolver.splice(usuarioIndex, 1);
            return deletedUsuario;
        }
        return null;
    }

    static create(usuario) {
        if (!usuario.success) {
            return Error;
        }

        const nuevoUsuario = {
            ...usuario.data
        };
        usuariosDevolver.push(nuevoUsuario);
        return nuevoUsuario;
    }

    static update(id, usuario) {
        if (!usuario.success) {
            return { error: 'Validación de datos es incorrecta' };
        }

        const usuarioIndice = usuariosDevolver.findIndex(u => u.id == id);
        if (usuarioIndice == -1) {
            return { error: 'Usuario no encontrado' };
        }

        const nuevoUsuario = {
            ...usuariosDevolver[usuarioIndice],
            ...usuario.data
        };
        usuariosDevolver[usuarioIndice] = nuevoUsuario;
        return nuevoUsuario;
    }
}