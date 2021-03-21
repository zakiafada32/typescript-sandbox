import { User } from './models/User';

const user = new User({ name: 'zaki' });
user.on('click', () => {});
user.on('click', () => {});
user.on('hover', () => {});

console.log(user);
