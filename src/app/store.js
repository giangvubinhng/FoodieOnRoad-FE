import create from 'zustand'
import axios from 'axios'

const useUserStore = create((set) => ({
  user: {displayName: '', email: '', isLoggedIn: false},
  fetchUser: async () => {
    try{
      const user = await axios.get('http://localhost:3030/auth/get-user', {
        withCredentials: true
      })
      if(user?.data){
        const userObj = {
          displayName: user.data.displayName,
          email: user.data.email,
          isLoggedIn: true
        }
        set({ user: userObj })
      }
      else{
        set({ user: {displayName: '', email: '', isLoggedIn: false} })
      }

    }
    catch(e){
      set({ user: {displayName: '', email: '', isLoggedIn: false} })
    }
  },
}))

export {useUserStore}
