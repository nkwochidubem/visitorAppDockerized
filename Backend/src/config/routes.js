
import express from 'express';
import visitorController from '../api/controllers/visitor.controller';

export const router = express.Router();

router.get('/visitors', visitorController.findAll);
router.get('/visitors/:id', visitorController.findOne);
router.delete('/visitors/:id', visitorController.delete);
router.put('/visitors/:id', visitorController.update);
router.post('/visitors', visitorController.create);
