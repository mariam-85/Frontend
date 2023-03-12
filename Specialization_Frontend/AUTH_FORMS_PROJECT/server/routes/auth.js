import { Router } from 'express';
import User from '../database/schemas/User.js';
import { hashPassword, comparePassword } from '../utils/utils.js';


const router = Router();

  router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const userDB = await User.findOne({ email });
    if(userDB) {
      res.status(400).send({ message: 'User already exists' })
    } else {
      const password = hashPassword(req.body.password);
      await User.create({ email, password });
      res.status(201).send({ message: 'User created'})
    }
  });

export default router;