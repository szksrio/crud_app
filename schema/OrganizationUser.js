const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const OrganizationUserSchema = new Schema(
  {
    orgId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "organization",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      requied: true,
      ref: "user",
    },
  },
  {
    timestamp: true,
  }
);

const OrganizationUser = mongoose.model(
  "OrganizationUser",
  OrganizationUserSchema
);

module.exports = OrganizationUser;
