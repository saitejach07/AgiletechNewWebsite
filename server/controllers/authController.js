import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";

/* =========================
   REGISTER USER
========================= */
export const registerUser = async (req, res) => {
  const {
    firstName,
    lastName,
    dob,
    gender,
    email,
    phone,
    profession,
    licenseNumber,
    issuingAuthority,
    expirationDate,
    npi,
    password,
  } = req.body;

  try {
    // 1️⃣ Check if email already exists
    const exists = await pool.query(
      "SELECT id FROM providers WHERE email = $1",
      [email]
    );

    if (exists.rows.length > 0) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Insert into DB
    const result = await pool.query(
      `INSERT INTO providers (
        first_name,
        last_name,
        dob,
        gender,
        email,
        phone,
        profession,
        license_number,
        issuing_authority,
        expiration_date,
        npi,
        password
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING id, first_name, last_name, email, created_at`,
      [
        firstName,
        lastName,
        dob || null,
        gender || null,
        email,
        phone || null,
        profession || null,
        licenseNumber || null,
        issuingAuthority || null,
        expirationDate || null,
        npi || null,
        hashedPassword,
      ]
    );

    return res.status(201).json({
      message: "Registered successfully",
      user: result.rows[0],
    });

  } catch (err) {
    console.error("❌ Register error:", err);
    return res.status(500).json({ error: "Registration failed" });
  }
};


/* =========================
   LOGIN USER
========================= */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1️⃣ Find user
    const result = await pool.query(
      "SELECT id, email, password, first_name, last_name FROM providers WHERE email = $1",
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // 3️⃣ Create JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 4️⃣ Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // 👉 change to true in production (HTTPS)
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",
    });

    return res.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
      },
    });

  } catch (err) {
    console.error("❌ Login error:", err);
    return res.status(500).json({ error: "Login failed" });
  }
};


/* =========================
   GET PROFILE (PROTECTED)
========================= */
export const getProfile = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
        id,
        first_name,
        last_name,
        email,
        phone,
        dob,
        gender,
        profession,
        license_number,
        issuing_authority,
        expiration_date,
        npi,
        created_at
       FROM providers
       WHERE id = $1`,
      [req.user.id]
    );

    if (!result.rows[0]) {
      return res.status(404).json({ error: "Provider not found" });
    }

    return res.json(result.rows[0]);

  } catch (err) {
    console.error("❌ Profile error:", err);
    return res.status(500).json({ error: "Failed to fetch profile" });
  }
};


/* =========================
   LOGOUT USER
========================= */
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    return res.json({ message: "Logged out successfully" });

  } catch (err) {
    console.error("❌ Logout error:", err);
    return res.status(500).json({ error: "Logout failed" });
  }
};