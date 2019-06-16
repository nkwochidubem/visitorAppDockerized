import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VisitorSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    tagNo: {
        type: String
    },

    purpose: {
        type: String,
        required: true
    },

    timeIn: {
        type: String,
        required: true
    },
    timeOut: {
        type: String
    },
    whomToVisit: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    /* company: {
        type: String,
        required: true
    }, */
    phone: {
        type: String
    }
});
export default mongoose.model('Visitor', VisitorSchema );

