const Devices = require("../schema/Devices");

exports.create = async (deviceType, deviceName) => {
  const newDevice = new Devices({
    deviceType,
    deviceName,
  });

  await newDevice.save();
  return newDevice;
};

exports.getDevices = async () => {
  const devicesList = await Devices.find();
  return devicesList;
};

//can be made more concise like "getDeviceInfo"
exports.getDevice = async (id) => {
  const device = await Devices.findOne({ _id: id });
  return device;
};

exports.deleteDevice = async (id) => {
  await Devices.findByIdAndDelete({ _id: id });
  console.log("device deleted....");
};

exports.updateDevice = async (id, deviceType, deviceName) => {
  await Devices.findByIdAndUpdate(id, { deviceType, deviceName });
};
