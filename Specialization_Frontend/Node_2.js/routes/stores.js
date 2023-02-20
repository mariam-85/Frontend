import { Router } from "express";

import storesList from '../data/stores'

const router = Router();

router.get('/stores', (req, res) => {
    res.send(storesList)
  });

  router.get('/stores/:id', (req, res) => {
    const { id } = req.params;
    const storesItem = storesList.find(el => el.id === +id)
    res.send(storesItem);
  });

  router.post('/stores', (req, res) => {
    storesList.push(req.body);
    res.send(201)
  });

  export default router;