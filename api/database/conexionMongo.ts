import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

const uri = process.env.CONEXION;
const client = new MongoClient(uri);

//PRODUCCION
export async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(process.env.DB_NAME);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}


export async function closeConnection() {
    try {
        await client.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
        throw error;
    }
}

export { client };