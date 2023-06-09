const { createOrgUser, getOrgUserList } = require("../models/OrganizationUser");

exports.createOrgUser = async (ctx) => {
  try {
    const { orgId, userId } = ctx.request.body;
    const newOrganizationUser = await createOrgUser(orgId, userId);
    ctx.response.body = newOrganizationUser;
  } catch (err) {
    console.log(err);
  }
};

exports.getOrgUsers = async (ctx) => {
  try {
    const { id } = ctx.request.params;
    const orgUserList = await getOrgUserList(id);
    // console.log(orgUserList);
    // const orgUser = { org: orgUserList[0].orgId };
    // const users = orgUserList.map((item) => item.userId);
    // orgUser.users = users;
    // ctx.response.body = orgUser;
    ctx.response.body = orgUserList;
  } catch (err) {
    console.log(err);
  }
};
