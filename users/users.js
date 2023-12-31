import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const USERS_FILE = 'users.json';

export function createUser(name, email) {
  const users = getUsers();
  const id = uuidv4();
  const newUser = { id, name, email };
  users.push(newUser);
  saveUsers(users);
  return newUser;
}

export function readUser(id) {
  const users = getUsers();
  return users.find((user) => user.id === id);
}

export function updateUser(id, updatedUser) {
  const users = getUsers();
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    saveUsers(users);
    return users[index];
  }
  return null;
}

export function deleteUser(id) {
  const users = getUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  saveUsers(updatedUsers);
  return id;
}

function getUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data) || [];
  } catch (error) {
    return [];
  }
}

function saveUsers(users) {
  const data = JSON.stringify(users, null, 2);
  fs.writeFileSync(USERS_FILE, data, 'utf8');
}
