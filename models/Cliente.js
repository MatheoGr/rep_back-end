import { clientes } from "../datos/cliente.js";
let clientesDevolver = clientes;

export class Cliente {
    static getAll() {
        return clientesDevolver;
    }

    static getOneByID(id) {
        return clientesDevolver.find(cliente => cliente.id == id);
    }

    static delete(id) {
        const clienteIndex = clientesDevolver.findIndex(cliente => cliente.id == id);
        if (clienteIndex !== -1) {
            const [deletedCliente] = clientesDevolver.splice(clienteIndex, 1);
            return deletedCliente;
        }
        return null;
    }

    static create(cliente) {
        if (!cliente.success) {
            return Error;
        }

        const nuevoCliente = {
            ...cliente.data
        };
        clientesDevolver.push(nuevoCliente);
        return nuevoCliente;
    }

    static update(id, cliente) {
        if (!cliente.success) {
            return { error: 'Validación de datos es incorrecta' };
        }

        const clienteIndice = clientesDevolver.findIndex(c => c.id == id);
        if (clienteIndice == -1) {
            return { error: 'Cliente no encontrado' };
        }

        const nuevoCliente = {
            ...clientesDevolver[clienteIndice],
            ...cliente.data
        };
        clientesDevolver[clienteIndice] = nuevoCliente;
        return nuevoCliente;
    }
}