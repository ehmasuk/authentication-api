import mongoose from "mongoose";

import env from "../config/env.js";

const connectMongodb = async (): Promise<mongoose.Mongoose> => {
  return await mongoose.connect(env.CLUSTER_URL, { dbName: env.DATABASE_NAME });
};

export default connectMongodb;
