interface UserProps {
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
}
