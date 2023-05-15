<template>
  <van-tabbar active-color="#ee0a24" route>
    <van-tabbar-item icon="home-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="search" to="/finder">发现</van-tabbar-item>
    <van-tabbar-item icon="bag-o" to="/shopping">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script lang='ts' setup>
import { reactive,ref} from 'vue'

</script>

<style lang='less' scoped>
</style>