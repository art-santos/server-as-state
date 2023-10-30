import { createActor } from 'xstate';
import { create } from 'zustand';
import { toggleMachine } from './toggle';
import { actor, startActor } from './Actor';
import { emit } from 'process';
import { emitEvent } from '@/app/Storage/Actions.cookie';

type BearStore = {
  toogle: () => void;
  newToogle: () => void;
  toogleState: string;
  setToogleState: (state: string) => void;
  newToogleState: string;
  setNewToogleState: (state: string) => void;
};

startActor();

export const useStore = create<BearStore>((set, get) => {
  actor.subscribe((snapshot) => {
    const newToogleState = snapshot.value as string;
    get().setToogleState(newToogleState);
  });
  return {
    toogle: () => {
      emitEvent();
      actor.send({ type: 'TOGGLE' });
    },
    newToogle: () => {
      actor.send({ type: 'TOGGLE' });
    },
    toogleState: '',
    setToogleState: (state: string) => set({
      toogleState: state,
    }),
    newToogleState: '',
    setNewToogleState: (state: string) => set({
      newToogleState: state,
    }),

  };
});