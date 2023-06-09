const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const OrganizationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Organization = mongoose.model("organization", OrganizationSchema);
module.exports = Organization;
