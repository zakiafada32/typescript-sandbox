import { User } from './models/User';

const user = new User({ name: 'A', age: 1 });

user.on('change', () => {
  console.log('User was changed');
});

user.set({ name: 'new name' });

const user2 = new User({ id: 1 });

user2.on('change', () => {
  console.log(user2);
});

user2.fetch();
