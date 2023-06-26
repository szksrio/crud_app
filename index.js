const mongoose = require("mongoose");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const router = require("./route");
const db = require("./config/db");
const port = 8080;

const app = new Koa();

app.use(cors({ origin: "*" }));
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

db();
app.listen(port, () => {
  console.log(`Application has started at ${port}`);
});
