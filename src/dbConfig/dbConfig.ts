import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected succesfully')
    });

    connection.on('error', (err) => {
      console.log('Connection error, ' + err);
      process.exit();
    })

  } catch (err) {
    console.log('Something goes wrong.');
    console.log(err);
  }
}

