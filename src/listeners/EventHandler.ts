import { EventEmitter } from 'events';
import { fromEvent, Observable } from 'rxjs';

export class MyEventHandler {
  private emitter: EventEmitter;

  constructor(emitter: EventEmitter) {
    this.emitter = emitter;
  }

  public emitEvent(eventName: string, ...args: any[]) {
    this.emitter.emit(eventName, ...args);
  }
}

export class MyEventListener {
  private emitter: EventEmitter;

  constructor(emitter: EventEmitter) {
    this.emitter = emitter;
  }

  public listen(eventName: string): Observable<any> {
    return fromEvent(this.emitter, eventName);
  }
}