import {defineStore} from 'pinia'
import {type IProductProps} from '@/interface/product'
let useProduct = defineStore('product',{
    persist: true,
    state:()=>{
        return {
            shopplist:[] as IProductProps[]   // 指定为数组， 并且数组的每项受 IProductProps约束
        }
    },
     getters:{
        totalPrice(state){
           return state.shopplist.reduce((prev,next)=>{
                return prev + (next.total as number) * next.price
            },0)
           
        }
     },
    actions:{
        addProduct(data:IProductProps){ 
            
            // 先判断购物车有没有这个商品， 没有就直接添加， 有就把数量+1
           let pindex =  this.shopplist.findIndex((item:IProductProps)=>{
                return item.pid == data.pid
            })
            if(pindex==-1) {
                data.total = 1;
                this.shopplist.push(data)
            } else {
                this.shopplist[pindex].total = this.shopplist[pindex].total as number + 1;
            }
            
        },
        reduceProduct(pid:number){
             var pindex = this.shopplist.findIndex((item)=>{
                return item.pid  == pid
             })
             let total = this.shopplist[pindex].total as number;
             // pindex就是你要减少商品数量的那个索引
             if(total>0) {
                this.shopplist[pindex].total = total- 1;
             }
            if(total==1) {
                // 直接把这条数据删掉
                this.shopplist.splice(pindex,1)
            }       
        }
    }
})

export default useProduct;