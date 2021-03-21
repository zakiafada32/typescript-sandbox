import { User } from './models/User';

const user = new User({ name: 'zaki', age: 20 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Ardi', age: 25 });

console.log(user.get('name'));
console.log(user.get('age'));
