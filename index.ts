import express from 'express';
import bodyParser from 'body-parser';
import api from './api';

// Configuración del servidor Express
const main = express();

// ⚙️ Usa un puerto por defecto (por si process.env.PORT está vacío)
const port = process.env.PORT || 3000;

// Configuración del middleware para procesar datos JSON
main.use(bodyParser.json());

// Rutas API
main.use('/api/v1', api);

// Iniciar el servidor
const server = main.listen(port, () => {
  console.log(`✅ Servidor iniciado en el puerto ${port}`);
});

server.on("error", (error: any) => {
  console.error(`❌ Error al iniciar el servidor: ${error.message}`);
});
