import { User } from './models/User';

const user = new User({ name: 'A', age: 1, id: 1 });
user.on('save', () => {
  console.log(user);
});

user.save();
