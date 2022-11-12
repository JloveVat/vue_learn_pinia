import { defineStore } from 'pinia'

const useUser = defineStore('useUser', {
  state: () => ({
    name: 'jingyou',
    age: 22,
    level: 100
  })
})

export default useUser
