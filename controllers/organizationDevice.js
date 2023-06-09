const {
  create,
  getOrgDevices,
  getOrgDevicesInfo,
  getOrgInfo,
} = require("../models/OrganizationDevices");

exports.createOrgDevice = async (ctx) => {
  try {
    const { orgId, deviceId } = ctx.request.body;

    const newOrgDevice = await create(orgId, deviceId);

    ctx.response.body = newOrgDevice;
  } catch (err) {
    console.log(err);
  }
};

exports.getOrgDevices = async (ctx) => {
  try {
    const { id } = ctx.request.params;
    console.log("--------------id--------------", id);
    // console.log("--------------id--------------", id);
    const orgDevicesList = await getOrgDevices(id);
    const orgDevice = { org: orgDevicesList[0].orgId };
    const devices = orgDevicesList.map((item) => item.deviceId);
    orgDevice.devices = devices;
    ctx.response.body = orgDevice;
  } catch (error) {
    console.log(error);
  }
};
