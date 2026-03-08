import { createUser } from '../models/userModal';
import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    await createUser({ name, email, password, role });
    debugger;
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};
