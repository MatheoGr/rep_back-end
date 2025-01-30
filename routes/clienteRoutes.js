import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController.js";

export const EnrutadorCliente = (modelo) => {
    const controlador = new ClienteController(modelo);
    const clienteRouter = Router();

    clienteRouter.get('/', controlador.getAll.bind(controlador));
    clienteRouter.get('/:id', controlador.getOneByID.bind(controlador));
    clienteRouter.delete('/:id', controlador.delete.bind(controlador));
    clienteRouter.post('/', controlador.create.bind(controlador));
    clienteRouter.put('/:id', controlador.update.bind(controlador));

    return clienteRouter;
};