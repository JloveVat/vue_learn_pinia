<script setup>
import useCounter from '@/stores/counter'
import { storeToRefs } from 'pinia';
import { toRefs } from 'vue';
const counterStore = useCounter()
// 直接结构后count不是响应式
// const { count } = counterStore

// const {count} = toRefs(counterStore)
const { count } = storeToRefs(counterStore)

const incrementCount = () => {
  counterStore.count++
}
</script>

<template>
  <div class="home">
    <h2>Home views</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <h2>被解构的值不是响应式: {{ count }}</h2>
    <button @click="incrementCount">count+1</button>
  </div>
</template>

<style scoped>

</style>
