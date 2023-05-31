class EventEmitter {
  eventListMap: Record<string, Function[]> = {};

  subscribe(event: string, cb: Function) {
    if (this.eventListMap[event] === undefined) {
      this.eventListMap[event] = [cb];
    } else {
      this.eventListMap[event].push(cb);
    }

    return {
      unsubscribe: () => {
        const eventList = this.eventListMap[event];
        const id = eventList.findIndex((ev) => ev === cb);

        if (id >= 0) eventList.splice(id, 1);
      },
    };
  }

  emit(event: string, args = []) {
    const eventList = this.eventListMap[event];

    return eventList === undefined || eventList.length === 0 //
      ? []
      : eventList.map((ev) => ev.apply(this, args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

const emitter = new EventEmitter();

emitter.emit('firstEvent');

emitter.subscribe('firstEvent', function cb1() {
  return 5;
});

emitter.subscribe('firstEvent', function cb1() {
  return 6;
});

emitter.emit('firstEvent');

export {};
