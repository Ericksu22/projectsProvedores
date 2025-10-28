import { Request, Response } from 'express';
//import { query } from "../../database/conexion";

export async function getPruebas(req: Request, res: Response) {
    try {


        res.status(200).send({ code: 200, message: 'Ok' })

        
    } catch (error1) {
        res.status(200).send({ code: 500, message: `Ocurrió un error inesperado ` + error1 })
    }
}


// export async function getSaveEvolucion(req: Request, res: Response) {
//     try {

//         const { evolucion, codigo, email } = req.body;

//         const consulUser = await query(`SELECT u.id, u.email FROM tb_user as u WHERE email = ? LIMIT 1;`, [email]);

//         if (consulUser.length === 0) {
//             return res.status(404).json({ status: false, message: "No existe el usuario" });
//         }

//         const user_id = consulUser[0].id

//         await query(
//             `INSERT INTO tb_evolucion (codigo, evolucion, doctor_id) VALUES (?, ?, ?)`,
//             [codigo, evolucion, user_id]
//         );

//         return res.status(200).json({ code: 200, status: true, message: 'Evoluciones guardadas exitosamente.' });

//     } catch (error: any) {
//         console.log('getSaveEvolucion: ', error.message)
//         return res.status(500).json({
//             code: 500, status: false, message: "Error interno del servidor ", error: error.message,
//         });
//     }
// }




export async function getConsultas(req: Request, res: Response): Promise<Response> {
  console.log("Inicio de proceso de consultas");

  try {
    const array = [
      { accion: "Cortes clásicos", valor: "4.00" },
      { accion: "Cortes con estilos modernos DESDE", valor: "5.00" },
      { accion: "Depilación con cera de CEJA", valor: "3.00" },
      { accion: "Depilación con navaja de CEJA", valor: "2.00" },
      { accion: "Arreglo de barba", valor: "2.50" },
      { accion: "Bigote", valor: "1.50" },
      { accion: "Bigote + Barba", valor: "4.00" },
      { accion: "Limpieza facial básica", valor: "10.00" },
      { accion: "Limpieza facial profunda", valor: "15.00" },
      { accion: "Rayitos parciales de hombre (40%)", valor: "25.00" },
      { accion: "Rayitos normales de hombre (40%) DESDE", valor: "35.00" },
      { accion: "Permanente parcial hombre (40%)", valor: "20.00" },
      { accion: "Permanente normal hombre (40%)", valor: "20.00" }
    ];

    // ✅ Retorno correcto en formato JSON
    return res.status(200).json({
      code: 200,
      message: "Ok",
      data: array
    });

  } catch (error) {
    console.error("❌ Error en proceso de consultas:", error);

    // ✅ Siempre retorna algo en caso de error
    return res.status(500).json({
      code: 500,
      message: "Error interno del servidor",
      error: (error as Error).message
    });
  }
}


export async function consultasmani(req: Request, res: Response): Promise<Response> {
  console.log("Inicio de proceso de consultas");

  try {
    const array = [
      { accion: "Cortes clásicos", valor: "4.00" },
      { accion: "Cortes con estilos modernos DESDE", valor: "5.00" },
      { accion: "Depilación con cera de CEJA", valor: "3.00" },
      { accion: "Depilación con navaja de CEJA", valor: "2.00" },
      { accion: "Arreglo de barba", valor: "2.50" },
      { accion: "Bigote", valor: "1.50" },
      { accion: "Bigote + Barba", valor: "4.00" },
      { accion: "Limpieza facial básica", valor: "10.00" },
      { accion: "Limpieza facial profunda", valor: "15.00" },
      { accion: "Rayitos parciales de hombre (40%)", valor: "25.00" },
      { accion: "Rayitos normales de hombre (40%) DESDE", valor: "35.00" },
      { accion: "Permanente parcial hombre (40%)", valor: "20.00" },
      { accion: "Permanente normal hombre (40%)", valor: "20.00" }
    ];

    // ✅ Retorno correcto en formato JSON
    return res.status(200).json({
      code: 200,
      message: "Ok",
      data: array
    });

  } catch (error) {
    console.error("❌ Error en proceso de consultas:", error);

    // ✅ Siempre retorna algo en caso de error
    return res.status(500).json({
      code: 500,
      message: "Error interno del servidor",
      error: (error as Error).message
    });
  }
}




export async function consultasestilista(req: Request, res: Response): Promise<Response> {
  console.log("Inicio de proceso de consultas");

  try {
    const array = [
      { accion: "Cortes clásicos", valor: "4.00" },
      { accion: "Cortes con estilos modernos DESDE", valor: "5.00" },
      { accion: "Depilación con cera de CEJA", valor: "3.00" },
      { accion: "Depilación con navaja de CEJA", valor: "2.00" },
      { accion: "Arreglo de barba", valor: "2.50" },
      { accion: "Bigote", valor: "1.50" },
      { accion: "Bigote + Barba", valor: "4.00" },
      { accion: "Limpieza facial básica", valor: "10.00" },
      { accion: "Limpieza facial profunda", valor: "15.00" },
      { accion: "Rayitos parciales de hombre (40%)", valor: "25.00" },
      { accion: "Rayitos normales de hombre (40%) DESDE", valor: "35.00" },
      { accion: "Permanente parcial hombre (40%)", valor: "20.00" },
      { accion: "Permanente normal hombre (40%)", valor: "20.00" }
    ];

    // ✅ Retorno correcto en formato JSON
    return res.status(200).json({
      code: 200,
      message: "Ok",
      data: array
    });

  } catch (error) {
    console.error("❌ Error en proceso de consultas:", error);

    // ✅ Siempre retorna algo en caso de error
    return res.status(500).json({
      code: 500,
      message: "Error interno del servidor",
      error: (error as Error).message
    });
  }
}
