import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../database/conexionMongo';


export async function consultamongo() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('serviciosEstilistas').find({}).toArray();
        console.log("valor del intento",collection)
        // ✅ Consulta correcta (el query va como objeto { intent: "despedir" })
        const doc = await collection
           console.log("valor del intento",doc)
        return doc
    } catch (error) {
        console.log(error)
    }
}


export async function consultamongoBarbero() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('serviciosBarbero').find({}).toArray();
        console.log("valor del intento",collection)
        // ✅ Consulta correcta (el query va como objeto { intent: "despedir" })
        const doc = await collection
           console.log("valor del intento",doc)
        return doc
    } catch (error) {
        console.log(error)
    }
}


export async function cc() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('serviciosEstilistas').find({}).toArray();
        console.log("valor del intento",collection)
        // ✅ Consulta correcta (el query va como objeto { intent: "despedir" })
        const doc = await collection
        console.log("valor del intento",doc)
        return doc
    } catch (error) {
        console.log(error)
    }
}




export async function consultamongoManifuristas() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('serviciosManicuristas').find({}).toArray();
        console.log("valor del intento",collection)
        // ✅ Consulta correcta (el query va como objeto { intent: "despedir" })
        const doc = await collection
           console.log("valor del intento",doc)
        return doc
    } catch (error) {
        console.log(error)
    }
}


export async function consultamongoMaquillistas() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('serviciosMaquillistas').find({}).toArray();
        console.log("valor del intento",collection)
        // ✅ Consulta correcta (el query va como objeto { intent: "despedir" })
        const doc = await collection
           console.log("valor del intento",doc)
        return doc
    } catch (error) {
        console.log(error)
    }
}


export async function consultamongoPromocion() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('ServiciosPormociones').find({}).toArray();
        console.log("valor del intento",collection)
        // ✅ Consulta correcta (el query va como objeto { intent: "despedir" })
        const doc = await collection
           console.log("valor del intento",doc)
        return doc
    } catch (error) {
        console.log(error)
    }
}


export async function consultasRolesMongo() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('rolesProfesionales').find({}).toArray();
        console.log("valor del intento",collection)
        // ✅ Consulta correcta (el query va como objeto { intent: "despedir" })
        const doc = await collection
           console.log("valor del intento",doc)
        return doc
    } catch (error) {
        console.log(error)
    }
}