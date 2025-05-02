const UsersRepository = require("../repositories/usersRepository");

const UserController = {
  create: async (req, res) => {
    const { name, email, type, password } = req.body;

    if (!name || !email || !type || !password) {
      return res.status(400).json({ error: "Campos obrigatorios faltando" });
    }

    const existingUser = await UsersRepository.findByEmail(email);
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

  list: async (req, res) => {
    const users = await UsersRepository.findAll();
    console.log(users);
    res.json(users);
  },

  findById: async (req, res) => {
    const { id } = req.params;
    const user = await UsersRepository.findById(id);
    if (!user) {
      return res.status(404).json({ error: "Usuario nao encontrado" });
    }
    res.json(user);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await UsersRepository.update(id, { name, password, email });
    if (!user) {
      ss;
      return res.status(404).json({ error: "Usuario nao encontrado" });
    }

    res.json(user);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    const sucess = await UsersRepository.delete(id);
    if (!sucess) {
      return res.status(404).json({ error: "Usuario nao encontrado" });
    }

    res.status(204).send();
  },
};

module.exports = UserController;
