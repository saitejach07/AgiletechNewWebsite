import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import "./db.js";
import npiRoutes from "./routes/npiRoutes.js";

const app = express();

app.use(cors({
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.FRONTEND_URL
      : "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/npi/api", npiRoutes);

const PORT = process.env.PORT || 5050;

//AWS 
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});