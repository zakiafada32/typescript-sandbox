import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Abc', age: 123 });

const userForm = new UserForm(document.getElementById('root')!, user);

userForm.render();
