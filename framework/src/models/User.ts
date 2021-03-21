interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {
  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {}
}
