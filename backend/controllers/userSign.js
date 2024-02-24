const { User } = require("../db");

//This controller will be used for User to create there profile and login
const userLogin = async (req, res) => {
  const { body } = req;

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

    res.json({
      message: "User Created Successfully",
      userId: user._id, // Return the ID of the created instructor
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
