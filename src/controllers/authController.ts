import { createUser } from '../models/userModal';
import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
  console.log('Received registration request with body:', req.body);
  try {
    const { name, email, password, role } = req.body;
    await createUser({ name, email, password, role });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log('Error in registerUser:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
