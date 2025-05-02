const { v4: uuidv4 } = require("uuid");
const db = require("../data/db");

const UsersRepository = {
  create: async (userData) => {
    const { name, email, password, type } = userData;
    await db.query(
      "INSERT INTO users (id, name, email, type, password) VALUES (?, ?, ?, ?, ?)",
      [uuidv4(), name, email, type, password]
    );
    return userData;
  },

  findAll: async () => {
    const [rows] = await db.query("SELECT * FROM users");
    return rows();
  },

  findByEmail: async (email) => {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    return rows[0];
  },

  findById: async (id) => {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [email]);

    return rows[0];
  },

  update: async (id, name, email, password) => {
    await db.query(
      "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
      [name, email, password, id]
    );
    return true;
  },

  delete: async (id) => {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    return true;
  },
};

module.exports = UsersRepository;
