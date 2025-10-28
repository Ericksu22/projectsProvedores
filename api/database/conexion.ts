import * as mysql from 'mysql';

interface QueryResult {
  [key: string]: any;
}

/* const poolConfig = {
  host: '45.85.147.227',
  user: 'Taxijgba1980',
  password: 'Taxis2%24@',
  database: 'db_taxis',
  charset: 'utf8mb4',
  timezone: 'America/Guayaquil'
}; */

const poolConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_taxis',
  charset: 'utf8mb4',
  timezone: 'America/Guayaquil'
};

let pool = mysql.createPool(poolConfig);

function reopenPool() {
  pool = mysql.createPool(poolConfig);
}

export function query(sql: string, values?: any): Promise<QueryResult[]> {
  return new Promise((resolve, reject) => {
    pool.getConnection((err: mysql.MysqlError | null, connection: mysql.PoolConnection) => {
      if (err) {
        // Si hay un error de conexión, intenta reabrir el pool y volver a ejecutar la consulta
        if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
          console.error('Conexión perdida. Reabriendo el pool...');
          reopenPool();
          return query(sql, values).then(resolve).catch(reject);
        } else {
          return reject(err);
        }
      }

      connection.query(sql, values, (err: mysql.MysqlError | null, rows: QueryResult[]) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  });
}

// Ejemplo de cómo cerrar el pool manualmente
export function closePool(): Promise<void> {
  return new Promise((resolve, reject) => {
    pool.end((err: mysql.MysqlError | null) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}