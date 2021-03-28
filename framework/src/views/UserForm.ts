import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>Name: ${this.model.get('name')}</div>
      <div>Age: ${this.model.get('age')}</div>
      <input />
      <button class="set-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
    </div>
  `;
  }

  bindEvent(fragment: DocumentFragment): void {
    this.parent.innerHTML = '';
    const eventMap = this.eventsMap();
    for (const eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvent(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
