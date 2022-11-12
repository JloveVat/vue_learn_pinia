<script setup>
import useUser from '@/stores/user'
import { storeToRefs } from 'pinia';

const userStore = useUser()

const { name, age, level } = storeToRefs(userStore)

const changeState = () => {
  // 1.一个修改状态
  // userStore.name = 'hang'
  // userStore.age = 23
  // userStore.level = 101

  // 2.一次性修改多个状态
  // userStore.$patch({
  //   name: 'you',
  //   age: 24
  // })

  // 3.替换state为新的对象, 原来的会被保留
  userStore.$state = {
    name: 'newName',
    level: 999
  }
}

const resetState = () => {
  userStore.$reset()
}
</script>

<template>
  <div class="home">
    <h2>Home views</h2>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>level: {{ level }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<style scoped>

</style>
