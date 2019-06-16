import Joi from '@hapi/joi';
import Visitor from '../models/visitor.model';
import HttpStatus from 'http-status-codes';

export default {
    findAll (req, res, next ) {
        Visitor.find()
        .then(visitors => res.json(visitors))
        .catch(err => res.json(err));
    },

    create (req, res) {
        const schema = Joi.object().keys({
            fullName: Joi.string().required(),
            purpose: Joi.string().required(),
            whomToVisit: Joi.string().required(),
            date: Joi.date().required(),
            timeIn: Joi.string().required(),
            address: Joi.string().optional(),
            phone: Joi.string().optional(),
            gender: Joi.string().optional(),
            tagNo: Joi.string().optional(),
            timeOut: Joi.string().optional(),

        });
        const {error, value } = Joi.validate(req.body, schema);
        if (error  && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }

        Visitor.create(value)
        .then(visitor => {
            res.json(visitor);
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    findOne(req, res) {
        let {id} = req.params;
        Visitor.findById(id)
            .then(visitor=> {
                if(!visitor) {
                    return res.status(HttpStatus.NOT_FOUND).json({err: 'Could not find any visitor'});
                }
                return res.json(visitor);
         })
         .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));

    },
    delete(req, res) {
        let {id} = req.params;
        Visitor.findByIdAndRemove(id)
            .then(visitor => {
                if(!visitor) {
                    return res.status(HttpStatus.NOT_FOUND).json({err: 'Could not delete any visitor'});
                }
                return res.json(visitor);
            }).catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },
    update(req, res) {
        let {id} = req.params;
        const schema = Joi.object().keys({
          fullName: Joi.string().required(),
          purpose: Joi.string().required(),
          whomToVisit: Joi.string().required(),
          date: Joi.date().required(),
          timeIn: Joi.string().required(),
          address: Joi.string().optional(),
          phone: Joi.string().optional(),
          gender: Joi.string().optional(),
          timeOut: Joi.string().optional(),
          tagNo: Joi.string().optional(),
        });
        const {error, value } = Joi.validate(req.body, schema);
        if (error  && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
        Visitor.findOneAndUpdate({_id: id}, value, {new: true})
            .then(visitor => res.json(visitor))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    }
};
