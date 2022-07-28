//Ref https://github.com/hiteshchoudhary/Zustand-crash-course/blob/main/src/app/courseStore.js
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

//This information is being saved in localStorage
const userStore = (set) => ({
  favCredits: [],
  addCredit: (credit) => {
    set((state) => ({
      favCredits: [credit, ...state.favCredits],
    }));
  },
  removeCredit: (id) => {
    set((state) => ({
      favCredits: state.favCredits.filter((c) => c.id != id),
    }));
  },
});

const userCreditStore = create(
  devtools(persist(userStore, { name: 'favCredits' }))
);

export default userCreditStore;
