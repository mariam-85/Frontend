import { Router } from "express";

import mobilesList from '../data/mobiles.js'

const router = Router();

  router.get('/mobiles', (req, res) => {
      const { quantity } = req.query;
    res.send(mobilesList)
  });

  router.get('/mobiles/:id', (req, res) => {
    const { id } = req.params;
    const mobilesItem = mobilesList.find(el => el.id === +id)
    res.send(mobilesItem);
  });

  router.post('/mobiles', (req, res) => {
    mobilesList.push(req.body);
    res.send(201)
  });

  export default router;