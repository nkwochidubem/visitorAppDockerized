import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String
  },
  code: {
    type: String
  }
});

export default mongoose.model('Company', companySchema );
