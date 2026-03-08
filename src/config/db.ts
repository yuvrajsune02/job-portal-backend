import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST || ('localhost' as string),
  user: process.env.DB_USER || ('root' as string),
  password: process.env.DB_PASSWORD || ('' as string),
  database: process.env.DB_NAME || ('job-portal' as string),
  port: Number(process.env.DB_PORT) || 3306,
});
