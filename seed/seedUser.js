require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/users");

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_CLUSTER}`;
const dbName = `${process.env.DB_NAME}`

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,dbName: dbName  } )
  .then(() => {
    console.log("Mongo connection is working");
  })
  .catch((err) => {
    console.log("error conneting to db: ", err);
  });

const seedUsers = [
  {
    name: "John",
    email: "john@gmail.com",
    password: "12345",
    followedUsers: [],
    followedProperties: [],
    budget: 5,
    location: [],
    ethinicity: "chinese",
    nationality: [],
    gender: "male",
    profilePic: "https://www.themoviedb.org/t/p/w235_and_h235_face/jfoUFc59Z1qGT3ctEPJwPINBDqv.jpg"
  },

  {
    name: "James",
    email: "james@gmail.com",
    password: "12345",
    followedUsers: [],
    followedProperties: [],
    budget: 50,
    location: [],
    ethinicity: "chinese",
    nationality: [],
    gender: "male",
    profilePic: "https://miro.medium.com/max/1400/1*ATC24JUtyUCh-B_Z6hJqBA@2x.jpeg"
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
  console.log('seeding done')
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log('closing connection')
});
