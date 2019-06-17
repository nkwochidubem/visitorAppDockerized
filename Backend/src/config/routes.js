
import express from 'express';
import visitorController from '../api/controllers/visitor.controller';
import companyController from '../api/controllers/company.controller';

export const router = express.Router();


// visitors route
router.get('/visitors', visitorController.findAll);
router.get('/visitors/:id', visitorController.findOne);
router.delete('/visitors/:id', visitorController.delete);
router.put('/visitors/:id', visitorController.update);
router.post('/visitors', visitorController.create);


// company route
router.get('/companies', companyController.findAll);
router.post('/companies', companyController.create);
