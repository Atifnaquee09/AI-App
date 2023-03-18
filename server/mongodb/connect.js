import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(`mongodb+srv://naqueeatif7:dKMnza3m99tPQAbt@cluster0.tvcbnj3.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;
