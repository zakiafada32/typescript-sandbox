import { Eventing } from './Eventing';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// get value type of interface
type ValueOf<T> = T[keyof T];
type valueOfUserProps = ValueOf<UserProps>;

export class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): valueOfUserProps {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
