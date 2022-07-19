//Ref https://github.com/hiteshchoudhary/Zustand-crash-course/blob/main/src/app/courseStore.js
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

//This information is being saved in localStorage
const userStore = (set) => ({
  user: {},
  setTelegramId: (id) => {
    set((state) => ({
      user: { telegramId: id, ...state.user },
    }));
  },
  setUserName: (uname) => {
    set((state) => ({
      user: { userName: uname, ...state.user },
    }));
  },
  setEmailAddr: (emailAddr) => {
    set((state) => ({
      user: { email: emailAddr, ...state.user },
    }));
  },
});

const useUserStore = create(devtools(persist(userStore, { name: 'user' })));

export default useUserStore;
