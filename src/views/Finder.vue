<template>
  <div>aaaa</div>
</template>

<script lang='ts' setup>
import { reactive,ref,onMounted} from 'vue'

let obj:any ={
  name:'alice',
  age:20,
  test:{
    fruit:'水果',
    info:{
        price:20,
        count:2
    }
  },
  run(){
    console.log(111);
    
  },
  hobby:[{
    title:'画画',
    star:2
  },{
    title:'唱歌',
    star:3
  }]
}

// let newArr:any = Array.isArray(obj) ? [] : {};

// for(let key in obj) {
//   if(typeof obj[key]!='object') {
//     newArr[key] = obj[key]
//   } else {
    
//     let obj2 = obj[key];
//     let newArr2:any = Array.isArray(obj2) ? [] : {};
//     for(let key2 in obj2) {
//       newArr2[key2] = obj2[key2]
//     }
//     newArr[key] = newArr2
//   }
  
// }

function test2(obj2:any){
  let newArr2:any = Array.isArray(obj2) ? [] : {};
    for(let key2 in obj2) {
      newArr2[key2] = obj2[key2]
    }
    return newArr2;
}

// function test1(obj:any){
// let newArr:any = Array.isArray(obj) ? [] : {};

// for(let key in obj) {
//   if(typeof obj[key]!='object') {
//     newArr[key] = obj[key]
//   } else {
//     newArr[key] = test1(obj[key])
//   }
// }
// return newArr
// }

function test1(obj:any){
if(typeof obj!='object') return obj;
let newArr:any = Array.isArray(obj) ? [] : {};

for(let key in obj) {
	 newArr[key] = test1(obj[key])
}
return newArr
}
console.log(test1(obj));



// 深拷贝
function deepClone(obj:any) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  const newObj:any = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
      newObj[key] = deepClone(obj[key]);
  }
  return newObj;
}

onMounted(() => {
  deepClone(obj)
})
</script>

<style lang='less' scoped>
</style>