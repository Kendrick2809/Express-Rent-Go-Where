const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users");
const mongoose = require("mongoose");

module.exports = {
  updateUser: async (req, res) => {
    // do validation...
    //if it fails when merging with react. its likely due to the need to decode jwt and get objectID out
   let user = null
    try {
        // genderToUpadte = req.body.gender
        user = await userModel.findByIdAndUpdate(
          req.body.userId,
          {
            gender : req.body.gender,
            followedUsers: req.body.followedUsers,
            followedProperties: req.body.followedProperties,
            nationality: req.body.nationality
          }
        );

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