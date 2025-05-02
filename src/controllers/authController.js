const jwt = require("jsonwebtoken");
const UsersRepository = require("../repositories/usersRepository");
require("dotenv").config();

const SECRET = process.env.SECRET;

const AuthController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await UsersRepository.findByEmail(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Credenciais invalidas" });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email, type: user.type },
      SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  },

  authenticate: (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Token nao fornecido" });
    }
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: "Token invalido" });
    }
  },
};

module.exports = AuthController;
