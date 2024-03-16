import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_APPLICATION",
    })
    .then(() => console.log("Connected to MONGODB!"))
    .catch((err) => console.log(`Error: (${err})`));
};
