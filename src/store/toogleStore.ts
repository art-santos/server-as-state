import { createActor } from 'xstate';
import { create } from 'zustand'
import { toggleMachine } from './toggle';
import { actor, startActor } from './Actor';

type BearStore = {
  bears: number;
  increasePopulation: () => void;
  toogleT: () => void;
  toogleStateT: string;
  setToogleStateT: (state: string) => void;
  removeAllBears: () => void;
};



startActor();

export const useToogleStore = (create<BearStore>((set, get) => ({
    bears: 0,
    toogleT: () => {
      actor.send({type: 'TOGGLE'})
    },
    toogleStateT: '',
    setToogleStateT: (state: string) => set({
      toogleStateT: state
    }),
    increasePopulation: () => set((state: BearStore) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  })))



