import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VisitorSchema = new Schema({
    fullName: {
        type: String
    },
    gender: {
        type: String
    },
    date: {
        type: Date
    },
    tagNo: {
        type: String
    },

    purpose: {
        type: String
    },

    timeIn: {
        type: String
    },
    timeOut: {
        type: String
    },
    whomToVisit: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    }
});

export default mongoose.model('Visitor', VisitorSchema );

