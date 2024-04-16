import express from 'express'
import * as RestaurantController from '../models/controller_2.js'

console.log('in route_3',RestaurantController);
const router = express.Router();

router.post('/newEntry',RestaurantController.newEntry);
router.delete('/delEntry/:id',RestaurantController.delEntry);
router.get('/findAll',RestaurantController.findAll);
router.put('/updateEntry/:id',RestaurantController.updateEntry);

export default router;
