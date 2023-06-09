const {
  create,
  getOrganizations,
  getOrganization,
  deleteOrganization,
  updateOrganization,
} = require("../models/Organization");

exports.createOrganization = async (ctx) => {
  try {
    const { organizationName } = ctx.request.body;
    const newOrg = await create(organizationName);

    ctx.response.body = newOrg;
  } catch (err) {
    console.log(err);
  }
};

exports.getOrganizations = async (ctx) => {
  try {
    const orgList = await getOrganizations();
    ctx.response.body = orgList;
  } catch (err) {
    console.log(err);
  }
};

exports.getOrganization = async (ctx) => {
  try {
    // console.log(ctx.request.params);
    const { id } = ctx.request.params;
    const orgName = await getOrganization(id);
    ctx.response.body = orgName;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteOrganization = async (ctx) => {
  try {
    await deleteOrganization(ctx.params.id);
    ctx.body = "Organization Deleted";
  } catch (err) {
    console.log(err);
  }
};

exports.updateOrganization = async (ctx) => {
  try {
    const { id } = ctx.params;
    const { name } = ctx.request.body;
    await updateOrganization(id, name);
    ctx.response.body = {
      ok: true,
      msg: "Organization update successful",
    };
  } catch (err) {
    console.log(err);
  }
};
