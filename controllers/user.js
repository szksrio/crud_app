const {
  createUser,
  getUserList,
  getUser,
  deleteUser,
  updateUser,
} = require("../models/User");

exports.createUser = async (ctx) => {
  try {
    const { name, email } = ctx.request.body;
    const newUser = await createUser(name, email);
    ctx.response.body = newUser;
  } catch (err) {
    console.log(err);
  }
};

exports.getUserList = async (ctx) => {
  try {
    const userList = await getUserList();
    ctx.response.body = userList;
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (ctx) => {
  try {
    const user = await getUser(ctx.params.id);
    ctx.response.body = user;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (ctx) => {
  try {
    await deleteUser(ctx.params.id);
    ctx.response.body = {
      ok: true,
      msg: "User deleted...",
    };
  } catch (err) {
    console.log(err);
  }
};

exports.updateUser = async (ctx) => {
  try {
    const { id } = ctx.params;
    const { name, email } = ctx.request.body;
    await updateUser(id, name, email);
    ctx.response.body = {
      ok: true,
      msg: "User details updated...",
    };
  } catch (err) {
    console.log(err);
  }
};
