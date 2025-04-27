const { Router } = require("express");
const AuthController = require("./authController");
const UserController = require("./userController");

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ status: "ok", serverTime: new Date().toISOString() });
});

routes.post("/auth/login", AuthController.login);

routes.post("/users", UserController.create);
routes.get("/users", UserController.list);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;
