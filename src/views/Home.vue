<script setup>
import useCounter from '@/stores/counter'
import useHome from '@/stores/home'

const counterStore = useCounter()

const changeState = () => {
  // counterStore.increment(111)
  counterStore.incrementNum(10)
}

const homeStore = useHome()
homeStore.fetchHomeMultidata().then(res => {
  console.log('fetchHomeMultidata的action已经完成', res);
})
</script>

<template>
  <div class="home">
    <h2>Home views</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <button @click="changeState">修改state</button>

    <hr>
    <!-- 展示数据 -->
    <h2>轮播的数据</h2>
    <ul>
      <li v-for="item in homeStore.banners" :key="item.acm">{{ item.title }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
