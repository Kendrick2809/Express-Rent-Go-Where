const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users");
const mongoose = require("mongoose");

module.exports = {
  displayUser: async (req, res) => {
    // do validation...

    let user = null;
    let ID = req.params.id;
    console.log(ID);

    try {
      user = await userModel.findById(ID).exec();
    } catch (err) {
      res.status(500);
      return res.json({ error: `Fail to get user of id ${req.body.userId}` });
    }

    if (!user) {
      return res.status(404).json();
    }
    return res.json(user);
  },

  updateUser: async (req, res) => {
    // do validation...

    let user = null;
    try {
      const propertyID = req.body.followedProperties;

      user = await userModel.findByIdAndUpdate(req.body.userId, {
        gender: req.body.gender,
        name: req.body.name,
        ethinicity: req.body.ethinicity,
        followedUsers: req.body.followedUsers,
        $push: { followedProperties: propertyID },
        nationality: req.body.nationality,
      });
    } catch (err) {
      res.status(500);
      return res.json({ error: `Fail to get user of id ${req.body.userId}` });
    }

    if (!user) {
      res.status(404);
      return res.json(user);
    }
    return res.json({});
  },

  deleteUser: async (req, res) => {
    // do validation...
    console.log("req is: ", req)

    const userId = req.params.id
    console.log("userId typeof is: ", typeof(userId))
    const mongooseUserId = new mongoose.Types.ObjectId(userId)
    // let user = null;

    // try {
    //   // user = await userModel.findById(userId);
    //   user = await userModel.findById(mongooseUserId)
    //   console.log("user is: ", user)
    // } catch (err) {
    //   res.status(500);
    //   return res.json({ error: `Fail to get user of id ${userId}` });
    // }

    // if (!user) {
    //   res.status(404);
    //   return res.json(user);
    // }

    // try {
    //   await user.delete();
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json({ error: "failed to delete user" });
    // }

    try {
      await userModel.findByIdAndDelete(userId)
    } catch (err) {
      console.log(err)
    }

    return res.json();
  },
};
//casting objectID string into objectid and pass into mongodb
// try {
//   user = await userModel.findByIdAndUpdate(
//     req.body.userId,
//     {
//       $push: {
//         nationality: mongoose.Types.ObjectId(req.body.nationality),
//       },
//     },
//     { new: true }
//   );
