export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHoverH1,
    };
  }

  onHoverH1(): void {
    console.log('h1 hover');
  }

  onButtonClick(): void {
    console.log('click button');
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input />
      <button>Update</button>
    </div>
  `;
  }

  bindEvent(fragment: DocumentFragment): void {
    const eventMap = this.eventsMap();
    for (const eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(':');
      console.log(eventName, selector);

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
