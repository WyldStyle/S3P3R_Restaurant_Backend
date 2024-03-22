import express from 'express'
import * as RestaurantController from '../models/controller_2'

const router = express.Router();

router.post('/newEntry',RestaurantController.newEntry);
router.delete('/delEntry',RestaurantController.delEntry);
router.get('/findAll',RestaurantController.findAll);
router.put('/updateEntry/:id',RestaurantController.updateEntry);

export default router;
