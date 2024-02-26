const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
//This controller will be used for User to create there profile and login
const userLogin = async (req, res) => {
  const { body } = req;
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.json("user Logged In");
};

const userCreate = async (req, res) => {
  try {
    const { body } = req;
    const existingUser = await User.findOne({
      username: body.username,
    });
    if (existingUser) {
      return res.status(411).json({
        message: "Email already taken/Incorrect inputs",
      });
    }
    const user = await User.create({
      username: body.username,
      name: body.name,
      password: body.password,
    });
    const userId = user._id;
    const token = jwt.sign(
      {
        userId,
      },
      JWT_SECRET
    );

    res.json({
      message: "User Created Successfully",
      userId: user._id,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating instructor",
      error: error.message,
    });
  }
};

module.exports = {
  userLogin,
  userCreate,
};
