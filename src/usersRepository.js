const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "users.json");
function readUsersFromFileJson() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function saveUsersToFileJson(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 3));
}
const UsersRepository = {
  create: (userData) => {
    const users = readUsersFromFileJson();
    const user = { id: uuidv4(), ...userData };
    users.push(user);
    saveUsersToFileJson(users);
    return user;
  },

  findAll: () => {
    return readUsersFromFileJson();
  },

  findByEmail: (email) => {
    const users = readUsersFromFileJson();
    return users.find((user) => user.email === email);
  },

  findById: () => {
    const users = readUsersFromFileJson();
    return users.find((user) => user.id === id);
  },

  update: (id, name) => {
    const users = readUsersFromFileJson();
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return null;
    users[index] = {
      ...users[index],
      ...name,
    };
    saveUsersToFileJson(users);
    return users[index];
  },

  delete: (id) => {
    const users = readUsersFromFileJson();
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    saveUsersToFileJson(users);
    return true;
  },
};

module.exports = UsersRepository;
