const UsersRepository = require("../repositories/usersRepository");

const UserController = {
  create: (req, res) => {
    console.log(req);
    const { name, email, type, password } = req.body;

    if (!name || !email || !type || !password) {
      return res.status(400).json({ error: "Campos obrigatorios faltando" });
    }

    const existingUser = UsersRepository.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email ja cadastrado" });
    }

    const user = UsersRepository.create({
      name,
      email,
      type,
      password,
    });
    res.status(201).json(user);
  },

  list: (req, res) => {
    const users = UsersRepository.findAll();
    res.json(users);
  },

  findById: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const user = UsersRepository.findById(id);
    if (!user) {
      return res.status(404).json({ error: "Usuario nao encontrado" });
    }
    res.json(user);
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = UsersRepository.update(id, { name, password, email });
    if (!user) {
      ss;
      return res.status(404).json({ error: "Usuario nao encontrado" });
    }

    res.json(user);
  },

  delete: (req, res) => {
    const { id } = req.params;

    const sucess = UsersRepository.delete(id);
    if (!sucess) {
      return res.status(404).json({ error: "Usuario nao encontrado" });
    }

    res.status(204).send();
  },
};

module.exports = UserController;
