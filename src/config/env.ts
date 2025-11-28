import dotenv from "dotenv";
import z from "zod";

dotenv.config();
const envSchema = z.object({
  PORT: z.string(),
  CLUSTER_URL: z.string(),
  DATABASE_NAME: z.string(),
  JWT_SECRET: z.string(),
  SMTP_USERNAME: z.string(),
  SMTP_PASSWORD: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log(parsedEnv);
  throw new Error(`Invalid environment variables`);
}

export default parsedEnv.data;
