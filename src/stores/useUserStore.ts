// https://zustand-demo.pmnd.rs/

import { create } from 'zustand';

interface User{
    id: number,
    name: string,
    email: string,
    age: number
}

type Store = {
    user: User | null,
    setUser: (user: User) => void
}

const useUserStore = create<Store>()((set) => ({
    user: null,
    setUser: (user: User) => set({user: user}) 
}))

export default useUserStore;
