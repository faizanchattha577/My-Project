const userschema = require("../models/userschema");

const register = async (req, res) => {
  const { name, password, email, phonenumber } = req.body;
  const newUser = new userschema({
    name: name,
    password: password,
    email: email,
    phonenumber: phonenumber,
  });

  try {
    await newUser.save();
  } catch (err) {
    res.status(400).json({ error: "Signup Failed", errorDetail: err });
    return
  }

  res.status(201).json({ message: "Signup Success" });
};

const login = async (req, res) => {
  let user;

  try {
    user = await userschema.findOne({ email: req.params.email });
  } catch (err) {
    console.log(err);
  }
  if (!user || req.params.password !== user.password) {
    res.status(401).json({ error: "Invalid Email or password" });
    return;
  } else {
    res.json(user);
  }
};

const getUserById = async (req, res) => {
  let user;

  try {
    user = await userschema.findById(req.params.id);
  } catch (err) {
    console.log(err);
  }

  res.json({ user: user });
};

const updateUser = async (req, res) => {
  const { uid, address } = req.body;
  
  try {
    result = await userschema.findByIdAndUpdate(uid, {
      address: address,
    });
  } catch (err) {
    res.status(400).json({ message: "Failed" });
    return;
  }

  res.json({ message: "User Info Updated Successfully" });
};

exports.getUserById = getUserById;
exports.register = register;
exports.login = login;
exports.updateUser = updateUser;
