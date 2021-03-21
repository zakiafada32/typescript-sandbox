import axios, { AxiosResponse } from 'axios';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// get value type of interface
type ValueOf<T> = T[keyof T];
type valueOfUserProps = ValueOf<UserProps>;

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): valueOfUserProps {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handler = this.events[eventName] || [];
    handler.push(callback);
    this.events[eventName] = handler;
  }

  trigger(eventName: string): void {
    const handler = this.events[eventName];
    if (!handler || handler.length === 0) {
      return;
    }
    handler.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  save(): void {
    const id = this.data.id;
    if (id) {
      axios.put(`http://localhost:3000/users/${'id'}`, this.data);
    } else {
      axios.post(`http://localhost:3000/users/`, this.data);
    }
  }
}
