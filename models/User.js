const User = require("../schema/User");

exports.createUser = async (name, email) => {
  const newUser = new User({
    name,
    email,
  });

  await newUser.save();
  return newUser;
};

exports.getUserList = async () => {
  const userList = await User.find({});
  return userList;
};

exports.getUser = async (id) => {
  const user = await User.findById({ _id: id });
  return user;
};

exports.deleteUser = async (id) => {
  await User.findByIdAndDelete({ _id: id });
  console.log("user deleted...");
};

exports.updateUser = async (id, name, email) => {
  await User.findByIdAndUpdate(id, { name, email });
};
