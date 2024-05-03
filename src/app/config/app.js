import "dotenv/config";

const PORT = process.env.APP_PORT || 5000;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_HOST || "5432";
const DB_NAME = process.env.DB_NAME || "DB";
const DB_USERNAME = process.env.DB_USERNAME || "user";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_DRIVER = process.env.DB_DRIVER || "postgres";

export { PORT, DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_DRIVER };
