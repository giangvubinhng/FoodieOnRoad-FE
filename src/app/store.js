import create from 'zustand'
import axios from 'axios'

const useUserStore = create((set) => ({
  user: {},
  fetchUser: async (pond) => {
    const user = await axios.get('http://localhost:3030/auth/get-user', {
      withCredentials: true
    })
    set({ fishies: await response.json() })
  },
}))
