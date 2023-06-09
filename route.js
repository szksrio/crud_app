const Router = require("koa-router");
const {
  createOrganization,
  getOrganizations,
  getOrganization,
  deleteOrganization,
  updateOrganization,
} = require("./controllers/Organization");

const {
  createDevices,
  getDevices,
  getDevice,
  deleteDevice,
  updateDevice,
} = require("./controllers/Devices");

const {
  createOrgDevice,
  getOrgDevices,
} = require("./controllers/organizationDevice");

const {
  createUser,
  getUserList,
  getUser,
  deleteUser,
  updateUser,
} = require("./controllers/user");

const {
  createOrgUser,
  getOrgUsers,
} = require("./controllers/organizationUser");

const { db } = require("./schema/OrganizationDevices");

const routes = new Router();

routes.get("/", (ctx) => {
  ctx.body = "Welcome to CRUD APP";
});

//Organization routes
routes.post("/org", createOrganization);
routes.get("/org", getOrganizations);
routes.get("/org/:id", getOrganization);
routes.delete("/org/:id", deleteOrganization);
routes.put("/org/:id", updateOrganization);

//Devices routes
routes.post("/devices", createDevices);
routes.get("/devices", getDevices);
routes.get("/devices/:id", getDevice);
routes.delete("/device/:id", deleteDevice);
routes.put("/devices/:id", updateDevice);

//organization devices
routes.post("/org-device", createOrgDevice);

//org/:id/devices
routes.get("/org/:id/devices", getOrgDevices);

//User routes
routes.get("/user", getUserList);
routes.get("/user/:id", getUser);
routes.post("/user", createUser);
routes.delete("/user/:id", deleteUser);
routes.put("/user/:id", updateUser);

//organization users
routes.post("/org-user", createOrgUser);
routes.get("/org/:id/users", getOrgUsers);

module.exports = routes;
