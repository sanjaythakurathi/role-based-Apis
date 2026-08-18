import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

// test route
app.get("/", (req, res) => {
  res.json({ message: "Auth API running 🚀" });
});

export default app;