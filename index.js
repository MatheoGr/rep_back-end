import express from "express";
import { EnrutadorArticulo } from "./routes/articulosRoutes.js";
import { EnrutadorUsuario } from "./routes/usuarioRoutes.js";
import { EnrutadorCliente } from "./routes/clienteRoutes.js";
import { Articulo } from "./models/Articulo.js";
import { Usuario } from "./models/Usuario.js";
import { Cliente } from "./models/Cliente.js";

const app = express();

app.use(express.json());
const PORT = 3030;

app.use('/api/articulos', EnrutadorArticulo(Articulo));
app.use('/api/usuarios', EnrutadorUsuario(Usuario));
app.use('/api/clientes', EnrutadorCliente(Cliente));

app.listen(PORT, () => {
    console.log("Servidor a la espera");
});