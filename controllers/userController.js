const bcrypt = require("bcrypt");
//const jwt = require('jsonwebtoken')
const userModel = require("../models/users");

module.exports = {
  register: async (req, res) => {
    // do validations ...

    const validatedValues = req.body;

    try {
      const user = await userModel.findOne({ email: validatedValues.email });
      if (user) {
        return res.status(409).json({ error: "user exists" });
      }
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }

    const passHash = await bcrypt.hash(req.body.password, 10);
    const user = { ...req.body, password: passHash };

    try {
      await userModel.create(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "failed to register user" });
    }

    return res.json();
  },
};
