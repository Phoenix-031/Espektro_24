import mongoose from 'mongoose';
export default async function databaseConnect() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error();
    }
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (error) {
    console.error('Error connecting to MongoDB');
    console.error(error);
  }
}
