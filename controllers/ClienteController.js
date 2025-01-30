import { validarCliente, validarParcialCliente } from "../helpers/zod.js";
import { Cliente } from "../models/Cliente.js";

export class ClienteController {
    constructor(modelo) {
        this.modelo = modelo;
    }

    getAll = async (request, response) => {
        response.json(await this.modelo.getAll());
    }

    getOneByID = async (request, response) => {
        const id = Number(request.params.id);
        const cliente = await this.modelo.getOneByID(id);
        if (cliente) {
            response.json(cliente);
        } else {
            response.status(400).end();
        }
    }

    delete = async (request, response) => {
        const id = Number(request.params.id);
        const clienteDevolver = await this.modelo.delete(id);
        if (clienteDevolver) {
            response.json(clienteDevolver);
        } else {
            response.status(400).end();
        }
    }

    create = async (request, response) => {
        const cliente = validarCliente(request.body);
        if (cliente.error) {
            return response.status(400).json('Validación de datos es Incorrecta');
        }
        const nuevoCliente = await this.modelo.create(cliente);
        response.json(nuevoCliente);
    }

    update = async (request, response) => {
        const id = Number(request.params.id);
        const clienteValidado = validarParcialCliente(request.body);
        const nuevoCliente = await this.modelo.update(id, clienteValidado);
        response.json(nuevoCliente);
    }
}