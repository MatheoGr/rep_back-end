import { Router } from "express";
import { ArticuloController } from "../controllers/ArticuloController.js";

export const EnrutadorArticulo = (modelo) => {
    const controlador = new ArticuloController(modelo);
    const articuloRouter = Router();

    articuloRouter.get('/', controlador.getAll.bind(controlador));
    articuloRouter.get('/:id', controlador.getOneByID.bind(controlador));
    articuloRouter.delete('/:id', controlador.delete.bind(controlador));
    articuloRouter.post('/', controlador.create.bind(controlador));
    articuloRouter.put('/:id', controlador.update.bind(controlador));

    return articuloRouter;
};