import { createActor } from "xstate";
import { toggleMachine } from "./toggle";

export const actor = createActor(toggleMachine);

export const startActor = () => actor.start();