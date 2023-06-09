const OrganizationDevices = require("../schema/OrganizationDevices");
const mongoose = require("mongoose");

exports.create = async (orgId, deviceId) => {
  const newOrganizationDevice = new OrganizationDevices({ orgId, deviceId });

  await newOrganizationDevice.save();
  return newOrganizationDevice;
};

exports.getOrgInfo = async (orgId) => {
  const orgInfo = await OrganizationDevices.find({
    orgId: new mongoose.Types.ObjectId(orgId),
  })
    .populate("orgId")
    .exec();
  return orgInfo;
};
exports.create = async () => {};

exports.getOrgDevices = async (orgId) => {
  const devices = await OrganizationDevices.find({
    orgId: new mongoose.Types.ObjectId(orgId),
  })
    .populate("orgId")
    .populate("deviceId")
    .exec();
  return devices;
};
