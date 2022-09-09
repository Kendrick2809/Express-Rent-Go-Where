const homeModel = require("../models/homes");
const userModel = require("../models/users");

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  homepage: (req, res) => {
    try {
      res.send("this is the homepage");
    } catch (err) {
      res.status(500);
      return res.json({ error: "failed to display homepage" });
    }
  },

  indexProperties: async (req, res) => {
    let properties = [];

    try {
      properties = await homeModel.find({});
      // console.log(properties)
    } catch (err) {
      res.status(500);
      return res.json({ error: "failed to return indexProperties" });
    }

    return res.json(properties);
  },

  indexPotentialHousemates: async (req, res) => {
    let potentialHosemates = [];

    try {
      potentialHosemates = await userModel.find({});
    } catch (err) {
      res.status(500);
      return res.json({ error: "failed to return indexPotentialHousemates" });
    }

    return res.json(potentialHosemates);
  },

  login: async (req, res) => {
    // do validations ...
    //insert validations later

    const validatedValues = req.body;

    let errMsg = "user email or password is incorrect";

    let user = null;

    try {
      user = await userModel.findOne({ email: validatedValues.email });

      if (!user) {
        return res.status(401).json({ error: errMsg });
      }
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }

    const isPasswordOk = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordOk) {
      return res.status(401).json({ error: errMsg });
    }

    // generate JWT and return as response

    const userData = {
      email: user.email,

    //   name: user.name,
    };

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour

        data: userData,
      },
      process.env.JWT_SECRET
    );

    return res.json({ token });
  },
};
