import { Router } from 'express'
import { storesList } from '../data/storesList.js'

const router = Router();

router.get('/', (req, res) => {
  // console.log(req.cookies);
  res.send(storesList)
})

export default router;