const OrganizationUser = require("../schema/OrganizationUser");
const mongoose = require("mongoose");

exports.createOrgUser = async (orgId, userId) => {
  console.log(typeof OrganizationUser);
  const newOrganizationUser = new OrganizationUser({ orgId, userId });

  await newOrganizationUser.save();
  return newOrganizationUser;
};

exports.getOrgUserList = async (orgId) => {
  // const users = await aggregate.match({
  //   OrgUsers: { $in: ["OrganizationUser"] },
  // });
  // const aggregate = await OrganizationUser.aggregate([
  //   { $match: { _id: orgId } },
  // ]);
  console.log(orgId);
  const user = await OrganizationUser.aggregate([
    {
      $match: { orgId: new mongoose.Types.ObjectId(orgId) },
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: {
        path: "$user",
      },
    },
    {
      $group: {
        _id: "$orgId",
        users: {
          $push: "$user",
        },
      },
    },
    {
      $lookup: {
        from: "organizations",
        localField: "_id",
        foreignField: "_id",
        as: "organization",
      },
    },
    {
      $unwind: {
        path: "$organization",
      },
    },
    {
      $project: {
        orgId: "$_id",
        _id: 0,
        organization: 1,
        users: 1,
      },
    },
  ]);
  console.log(user);
  return user;
};
