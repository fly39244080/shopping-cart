<template>
  <van-search
        v-model="searchvalue"
        show-action
        label="商品"
        placeholder="请输入搜索关键词"
        >
        <template #action>
            <van-button type="primary" @click="onClickButton" size="small">搜索</van-button>
        </template>
   </van-search>

   <div class="content-layout">
    <van-sidebar v-model="kindActive" @change="onChange">
        <van-sidebar-item  v-for="(item,index) in categories" :key="index" :title="item.typeName" />
        </van-sidebar>

   <div class="right-box">
    <div class="product" v-for="(item,index) in currenDataList" :key="index">
        <img :src="item.imgPath" alt="">
        <div class="title"> 
            <span> {{ item.pname }} </span>
            <van-icon name="shopping-cart-o" @click="addCart(item)" />
        </div>
    </div>
   </div>
   </div>

</template>

<script lang='ts' setup>
import { reactive,ref,onMounted} from 'vue'
import productData  from '@/assets/data'
import {type IProductProps} from '@/interface/product'
import { showToast } from 'vant';
import 'vant/es/toast/style';
// 按需导入你的仓库
import useProduct from '@/stores/product'
const searchvalue = ref('');  //搜索
const kindActive = ref(0);   // 左边类别
const listAll = productData.products;

// 存当前的商品列表
const currenDataList = ref<IProductProps[]>([]);
//初始进来的typeId
const curType = ref<number>(productData.category[0].typeId)
const categories = productData.category;

const productModal = useProduct();
//得到相应typeId的商品
const getProductList = ()=>{
   let currentData =  listAll.filter((item)=>{
        return item.typeId == curType.value
    })
    currenDataList.value = currentData;
}
// 添加购物车
const addCart = (item:IProductProps)=> {
    productModal.addProduct(item)
    showToast('添加成功');
}
    onMounted(() => {
        getProductList()
    })
    const onClickButton = () => {
        console.log(searchvalue);
            let currentData =  listAll.filter((item)=>{
            return item.pname.includes(searchvalue.value)
        })
        currenDataList.value = currentData;
        
    }

     //  根据 typeId 过滤商品 
    const onChange = (index:number)=>{
        console.log(index);
        let currentData = categories[index-1];
        curType.value = currentData.typeId;
        getProductList();
    }

</script>

<style lang='less' scoped>
</style>