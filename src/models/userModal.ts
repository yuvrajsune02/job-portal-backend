import { User } from '../types/types';
import { db } from '../config/db';

export const createUser = async (user: User) => {
  // Logic to create a new user in the database
  const { name, email, password, role } = user;
  const query =
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
  const [result] = await db.execute(query, [name, email, password, role]);
  return result;
};
