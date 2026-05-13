import dotenv from "dotenv";
dotenv.config();
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});
const result = await pool.query("SELECT current_database()");
console.log("DB:",result.rows);
console.log(process.env.DATABASE_URL);


pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ DB connection error:", err));

export default pool;