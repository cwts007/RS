import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://cts:qwerty123456@rsdb.jjx90qx.mongodb.net/?retryWrites=true&w=majority&appName=RSDB';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Conectado a la base de datos de MongoDB');
        return client.db('RSDB');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }
}