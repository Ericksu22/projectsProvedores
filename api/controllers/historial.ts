import { Request, Response } from 'express';
import { consultasRolesMongo } from '../services/consultasmongo';


export async function historicoclientes(req: Request, res: Response) {
    try {
        res.status(200).send({ code: 200, message: 'Ok' })
        

    } catch (error1) {
        res.status(200).send({ code: 500, message: `Ocurrió un error inesperado ` + error1 })
    }
}


export async function rolesConfiguracion(req: Request, res: Response) {
    try {
    
      const valormanicurista = await consultasRolesMongo ();
         const array =  valormanicurista
         // ✅ Retorno correcto en formato JSON
         return res.status(200).json({
           code: 200,
           message: "Ok",
           data: array
         });
    } catch (error1) {
        res.status(200).send({ code: 500, message: `Ocurrió un error inesperado ` + error1 })
    }
}