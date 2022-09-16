const homeModel = require("../models/homes");
const userModel = require("../models/users");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    //potential soln:
    let potentialHosemates = [];

    try {
      potentialHosemates = await userModel.find({});
    } catch (err) {
      res.status(500);
      return res.json({ error: "failed to return indexPotentialHousemates" });
    }

    return res.json(potentialHosemates);
  },

  indexSingleProperties: async (req, res) => {
    let property = [];

    try {
      property = await homeModel.findById(req.params.propID);
      // console.log(properties)
    } catch (err) {
      res.status(500);
      return res.json({ error: "failed to return indexProperties" });
    }

    return res.json(property);
  },

  createProperties: async (req, res) => {
    try {
      await homeModel.create(req.body);
    } catch (err) {
      res.status(500);
      return res.json({ error: "failed to create a single property" });
    }
    return res.status(201).json();
  },

  editSingleProperties: async (req, res) => {
    let property = null;
    try {
      property = await homeModel.findByIdAndUpdate(req.params.propID, req.body);
    } catch (err) {
      res.status(500);
      return res.json({ error: `Fail to get id ${req.params.userId}` });
    }
  },

  deleteSingleProperties: async (req, res) => {
    try {
      property = await homeModel.findById(req.params.propID);
    } catch (err) {
      res.status(500);
      return res.json({ error: `Fail to get user of id ${req.params.propID}` });
    }
    try {
      await property.delete();
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "failed to delete property" });
    }

    return res.json();
  },

  displayPropertyDashboard: async (req, res) => {
    // do validation...

    let user = null;
    try {
      user = await userModel.findById(req.body.userId).exec();
    } catch (err) {
      res.status(500);
      return res.json({ error: `Fail to get user of id ${req.body.userId}` });
    }

    if (!user) {
      return res.status(404).json();
    }
    return res.json(user);
  },
};
