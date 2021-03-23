import { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attribute: Attributes<UserProps>;

  constructor(attr: UserProps) {
    this.attribute = new Attributes<UserProps>(attr);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attribute.get;
  }

  set(update: UserProps): void {
    this.attribute.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');
    console.log(id);
    if (typeof id !== 'number') {
      throw new Error('cannot fetch data without id');
    }
    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }
}
