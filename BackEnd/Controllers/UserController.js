const UserSchema = require("../Model/User");

const getAlluser = async (req, res, next) => {
  let users;
  try {
    users = await UserSchema.find();
  } catch (err) {
    console.log(err);
  }
  res.json(users);
};

const postUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const newUser = new UserSchema({
    name: name,
    email: email,
    password: password,
  });
  try {
    await newUser.save();
  } catch (err) {
    console.log(err);
  }

  res.json(newUser);
};

const getUserByid = async (req, res, next) => {
  const { uid } = req.params;
  let user;
  try {
    user = await UserSchema.findById(uid);
  } catch (err) {
    console.log(err);
  }
  res.json(user);
};

const getUserByname = async (req, res, next) => {
  const name = req.params.name;
  const age = req.params.age;

  try {
    user = await UserSchema.find({ name: name, age: { $gte: 12 } });
  } catch (err) {
    console.log(err);
  }
  res.json(user);
};

const dltUserByid = async (req, res, next) => {
  const uid = req.params.uid;
  try {
    user = await UserSchema.findByIdAndDelete({ _id: uid });
  } catch (err) {
    console.log(err);
  }
  res.json({ user: "Deleted" });
};


const updtUserByid = async (req, res, next) => {
  const {name,email,password,id}=req.body;
  let newUser
  try {
  newUser=await UserSchema.findByIdAndUpdate(id,{name:name,email:email,password:password})

  } catch (err) {
    console.log(err);
  }
  res.json({ user: newUser });
};


exports.getAlluser = getAlluser;
exports.postUser = postUser;
exports.getUserByid = getUserByid;
exports.getUserByname = getUserByname;
exports.dltUserByid = dltUserByid;
exports.updtUserByid=updtUserByid;
