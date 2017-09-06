export class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(eventName, callback) {
    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  once(eventName, callback) {
    //这个对once理解很精髓..
    let wrappedFn = (...args) => {
      callback.call(this, args)
      this.off(eventName, wrappedFn)
    }
    this.on(eventName, wrappedFn)
  }

  off(eventName, callback = null) {
    let fns = this.events[eventName];
    if (fns.length === 0) return;

    if (callback) {
      let index = fns.indexOf(callback)
      this.events[eventName].splice(index, 1)
    } else {
      this.events[eventName] = []
    }
  }

  fire(eventName, ...args) {
    var ev = eventName;
    var fns = this.events[ev];
    if (fns && fns.length) {
      fns.forEach(fn => {
        fn.apply(this, args)
      })
    }
  }
}
