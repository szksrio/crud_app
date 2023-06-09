const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DeviceSchema = new Schema(
  {
    deviceType: {
      type: String,
      required: true,
    },
    deviceName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Devices = mongoose.model("devices", DeviceSchema);
module.exports = Devices;
