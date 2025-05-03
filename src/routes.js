const { Router } = require("express");
const AuthController = require("./controllers/authController");
const UserController = require("./controllers/userController");

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ status: "ok", serverTime: new Date().toISOString() });
});

routes.post("/auth/login", AuthController.login);

routes.post("/users/create-user", UserController.createUser);
routes.use("/users", AuthController.authenticate);
routes.post("/users/create-admin", UserController.createAdmin);
routes.get("/users", UserController.list);
routes.get("/users/:id", UserController.findById);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;
