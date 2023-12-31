import { createUser, readUser, updateUser, deleteUser } from './users.js';

const newUser = createUser('John Doe', 'john@example.com');
console.log('Created User:', newUser);

const userId = newUser.id;
const foundUser = readUser(userId);
console.log('Read User:', foundUser);

const updatedUser = updateUser(userId, { name: 'Updated John Doe' });
console.log('Updated User:', updatedUser);

const deletedUserId = deleteUser(userId);
console.log('Deleted User ID:', deletedUserId);
