// dependencies
import { Router } from "express";

// controller
import { consultasestilista, consultasmani, getConsultas, getPruebas } from "../controllers/Consultas";

// declarations
const userRouter = Router();

userRouter.get("/getPruebas", getPruebas);
userRouter.post("/getconsultas", getConsultas);
userRouter.post("/getcosultmani",consultasmani);
userRouter.post("/consultasestilista",consultasestilista)

export default userRouter;