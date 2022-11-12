// 定义关于counter的store
import { defineStore } from 'pinia'
import useUser from './user'

const useCounter = defineStore('counter', {
  state: () => ({
    count: 99,
    friends: [
      { id: 111, name: 'jing' },
      { id: 112, name: 'you' },
      { id: 113, name: 'shi' }
    ]
  }),
  getters: {
    // 1.基本使用
    doubleCount(state) {
      return state.count * 2
    },

    // 2.一个getter引入另外一个getter
    doubleCountAddOne() {
      // this是store实例
      return this.doubleCount + 1
    },

    // 3.getters也支持返回一个函数
    getFriendById(state) {
      return function (id) {
        return state.friends.find(item => item.id === id)
      }
    },

    // 4.getters中用到别的store中的数据
    showMessage(state) {
      // 1.获取user信息
      const userStore = useUser()

      // 2.获取自己的信息

      // 3.拼接信息
      return `name: ${userStore.name} - count: ${state.count}`
    }
  },
  actions: {
    increment(payload) {
      console.log(payload)
      this.count++
    },
    incrementNum(num) {
      this.count += num
    }
  }
})

export default useCounter
