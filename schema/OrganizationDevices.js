const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const OrganizationDeviceSchema = new Schema(
  {
    orgId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "organization",
    },
    deviceId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "devices",
    },
  },
  {
    timestamp: true,
  }
);

const OrganizationDevice = mongoose.model(
  "OrganizationDevice",
  OrganizationDeviceSchema
);

module.exports = OrganizationDevice;
