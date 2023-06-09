const Organization = require("../schema/Organization");

exports.create = async (name) => {
  const newOrganization = new Organization({
    name,
  });

  await newOrganization.save();
  return newOrganization;
};

exports.getOrganizations = async () => {
  const orgList = await Organization.find();
  return orgList;
};

exports.getOrganization = async (id) => {
  //   const ID = id.toString();
  //   console.log(ID);
  const orgName = await Organization.findOne({ _id: id });
  return orgName;
};

exports.deleteOrganization = async (id) => {
  await Organization.findByIdAndDelete({ _id: id });
  console.log("document deleted...");
};

exports.updateOrganization = async (id, name) => {
  const update = { name: name };
  return Organization.findByIdAndUpdate(id, update);
};
