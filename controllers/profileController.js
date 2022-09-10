const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users");
const mongoose = require("mongoose");

module.exports = {
  updateUser: async (req, res) => {
    // do validation...

    let user = null;
    // const filterUserEmail = { email: req.body.email };
    // const updateNationality = { nationality: req.body.nationality };
    // console.log("userEmail :", filterUserEmail);
    // console.log("nationality :", updateNationality);

    try {
      user = await userModel.findOneAndUpdate(
        filterUserEmail,
        {
          $push: {
            nationality: mongoose.Types.ObjectId(req.body.nationality),
          },
        },
        { new: true }
      );

      console.log(user.email);
      console.log(user.nationality);
      console.log("email ok");

      // await userModel.updateOne({ nationality: nationalityBody })
      // await user.save()
    } catch (err) {
      res.status(500);
      return res.json({ error: `Fail to get user of id ${filterUserEmail}` });
    }

    if (!user) {
      res.status(404);
      return res.json(user);
    }

    // try {
    //     await user.updateOne({ : nationalityBody })
    // } catch (err) {
    //     res.status(500)
    //     return res.json({error: "failed to update user"})
    // }

    return res.json({});
  },
};
