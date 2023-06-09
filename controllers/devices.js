const {
  create,
  getDevices,
  getDevice,
  deleteDevice,
  updateDevice,
} = require("../models/Devices");

exports.createDevices = async (ctx) => {
  try {
    const { deviceType, deviceName } = ctx.request.body;
    const newDevice = await create(deviceType, deviceName);
    ctx.response.body = newDevice;
  } catch (err) {
    console.log(err);
  }
};

exports.getDevices = async (ctx) => {
  try {
    const devicesList = await getDevices();
    ctx.response.body = devicesList;
  } catch (err) {
    console.log(err);
  }
};

exports.getDevice = async (ctx) => {
  try {
    const device = await getDevice(ctx.params.id);
    ctx.response.body = device;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteDevice = async (ctx) => {
  try {
    await deleteDevice(ctx.request.params.id);
    ctx.response.status = 200;
  } catch (err) {
    console.log(err);
  }
};

exports.updateDevice = async (ctx) => {
  try {
    const { id } = ctx.params;
    const { deviceType, deviceName } = ctx.request.body;
    await updateDevice(id, deviceType, deviceName);
    ctx.response.body = {
      ok: true,
      msg: "Device update Successful",
    };
  } catch (err) {
    console.log(err);
  }
};
