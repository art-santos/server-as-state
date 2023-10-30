"use server"
import { myEmitter } from "@/listeners/EventEmitter"
import { MyEventHandler, MyEventListener } from "@/listeners/EventHandler"
import { actor, startActor } from "@/store/Actor"
import { cookies } from "next/headers"

var JSONB = require('json-buffer')
var Buffer = require('buffer').Buffer

const cookieStorage = cookies()

export const cookieSetter = (name: string, value: string, days: number) => {
  console.time("cookieSetter");
  const serverCookie = cookieStorage.set(name, value, {
    maxAge: days * 24 * 60 * 60,
    path: '/',
    secure: false
  });
  console.timeEnd("cookieSetter");
  return serverCookie;
};

export const emitEvent = (): Promise<Uint8Array> => {
  startActor();
  actor.send({ type: 'TOGGLE' });
  const snapshot = actor.getSnapshot().toJSON();
  const str = JSONB.stringify(Buffer.from(JSON.stringify(snapshot)))
  return str;
};

