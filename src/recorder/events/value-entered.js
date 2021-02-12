import eventTypes from './event-types';
import Event from './event';

export default class ValueEntered extends Event {
  constructor(event, saveAllData) {
    super(event);
    const element = event.target;

    if (!element) {
      return;
    }
    this.placeholder = element.placeholder;
    this.name = element.name;

    if (saveAllData === true) {
      this.value = element.value || element.innerText;

      if (element.tagName && element.tagName.toLowerCase() === 'select') {
        for (let i = 0; i < element.children.length; i++) {
          let option = element.children[i];

          if (option.value === element.value && !!option.innerText) {
            this.value = option.innerText;
            break;
          }
        }
      }
    }
    this.type = eventTypes.INPUT;
  }

};
