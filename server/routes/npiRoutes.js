import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://npiregistry.cms.hhs.gov/api/",
      {
        params: req.query,
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error("NPI API Error:", err.message);

    res.status(500).json({
      error: "Failed to fetch NPI data",
    });
  }
});

export default router;