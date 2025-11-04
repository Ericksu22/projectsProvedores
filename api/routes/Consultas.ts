// dependencies
import { Router } from "express";

// controller
import { consultaestilista, consultamanicurista, consultabarbero, consultamaquillista, consultapromocion, getConsultas, getPruebas } from "../controllers/Consultas";
import { historicoclientes, rolesConfiguracion } from "../controllers/historial";

// declarations
const userRouter = Router();

userRouter.get("/getPruebas", getPruebas);
userRouter.post("/getconsultas", getConsultas);
userRouter.post("/getconsultaestilista",consultaestilista);
userRouter.post("/getcosultamanicurista",consultamanicurista);
userRouter.post("/getconsultabarbero",consultabarbero);
userRouter.post("/getconsultamaquillista",consultamaquillista);
userRouter.post("/getconsultapromocion",consultapromocion);
userRouter.post("/getconsultapromocion",historicoclientes);
userRouter.post("/ObtenerValores",rolesConfiguracion);


export default userRouter;