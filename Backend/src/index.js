import express from "express";
import { dbConnect } from "./db/index.js";
import cors from "cors";
import { User } from "./models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config;

const app = express();

app.use(cors());
app.use(express.json());
dbConnect();
// GET
app.get("/", (req, res) => {
  res.json({ Orther: "Ansar Mahmood" });
});
// SIGNUP 
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await User.create({ name, email, password: hashedPassword })
      .then(() => console.log("User successfully signup"))
      .catch((error) => console.log(error.message));
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// LOGIN 
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compare(password, user.password)) {
        // jwt.sign(payload, secretKey, options); genrate jwtToken
      const jwttoken = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      res.status(200).json({
        status: true,
        jwttoken,
        user: { userName: user.name, email: user.email },
      });
      
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});
// listen
app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is runnig at http://localhost:${process.env.PORT || 5000}`
  );
});
