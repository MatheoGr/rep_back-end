import { validarUsuario, validarParcialUsuario } from "../helpers/zod.js";

export class UsuarioController {
    constructor(modelo) {
        this.modelo = modelo;
    }

    getAll = async (request, response) => {
        response.json(await this.modelo.getAll());
    }

    getOneByID = async (request, response) => {
        const id = Number(request.params.id);
        const usuario = await this.modelo.getOneByID(id);
        if (usuario) {
            response.json(usuario);
        } else {
            response.status(400).end();
        }
    }

    delete = async (request, response) => {
        const id = Number(request.params.id);
        const usuarioDevolver = await this.modelo.delete(id);
        if (usuarioDevolver) {
            response.json(usuarioDevolver);
        } else {
            response.status(400).end();
        }
    }

    create = async (request, response) => {
        const usuario = validarUsuario(request.body);
        if (usuario.error) {
            return response.status(400).json('Validación de datos es Incorrecta');
        }
        const nuevoUsuario = await this.modelo.create(usuario);
        response.json(nuevoUsuario);
    }

    update = async (request, response) => {
        const id = Number(request.params.id);
        const usuarioValidado = validarParcialUsuario(request.body);
        const nuevoUsuario = await this.modelo.update(id, usuarioValidado);
        response.json(nuevoUsuario);
    }
}