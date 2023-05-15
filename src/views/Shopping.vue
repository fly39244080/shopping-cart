<template>
<van-nav-bar
  title="购物车"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
  <van-card v-for="(item,index) in shopplist" :key="index"
  :num="item.total"
  :price="item.price"
  :desc="item.pname"
  title="商品名称"
  :thumb="item.imgPath"
>
  <template #footer>
    <van-button size="mini" @click="addCart(item)">+</van-button>
    <van-button size="mini" @click="reduceCart(item.pid)">-</van-button>
  </template>
</van-card>
<div class="total-price">
 <span> 总计：{{ totalPrice }}</span>

  <van-button >去结算</van-button>
</div>
</template>

<script lang='ts' setup>
import { reactive,ref} from 'vue'
import {storeToRefs} from 'pinia'
import {type IProductProps} from '@/interface/product'
import useProduct from '@/stores/product'
const productModal = useProduct();

const {shopplist,totalPrice} = storeToRefs(productModal);

// 添加购物车
const addCart = (item:IProductProps)=> {
    productModal.addProduct(item)
}
const reduceCart = (pid:number)=>{
  //减少购物车里的数据
  productModal.reduceProduct(pid)
}
const onClickLeft = () => history.back();
</script>

<style lang='less' scoped>
</style>