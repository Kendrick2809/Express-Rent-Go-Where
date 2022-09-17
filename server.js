require("dotenv").config();

const connectToMongo = require("./database/mongodb");

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const app = express();
const port = process.env.PORT || 8000;

//routes
const apiRouter = require("./routers/propertyRoutes");
const userRouter = require("./routers/userRoutes");
const profileRouter = require("./routers/profileRoutes");

// app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//Router
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/profile", profileRouter);

app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
  res.send("append /api/v1/...");
});

//Server
app.listen(port, async () => {
  try {
    await mongoose.connect(connectToMongo.uri, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log("Failed to connect to Mongo Atlas. Error is: ", err);
    process.exit(1);
  }

  console.log(`Rent-Go-Where is listening on port ${port}`);
});
