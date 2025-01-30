import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController.js";

export const EnrutadorUsuario = (modelo) => {
    const controlador = new UsuarioController(modelo);
    const usuarioRouter = Router();

    usuarioRouter.get('/', controlador.getAll.bind(controlador));
    usuarioRouter.get('/:id', controlador.getOneByID.bind(controlador));
    usuarioRouter.delete('/:id', controlador.delete.bind(controlador));
    usuarioRouter.post('/', controlador.create.bind(controlador));
    usuarioRouter.put('/:id', controlador.update.bind(controlador));

    return usuarioRouter;
};