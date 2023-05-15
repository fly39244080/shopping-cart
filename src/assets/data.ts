// 考试数据，导入即可使用
const data = {
    // 分类数据
    category:[
        {typeId:1,typeName:"手机"},
        {typeId:2,typeName:"空调"},
        {typeId:3,typeName:"电脑"},
        {typeId:4,typeName:"洗衣机"},
        {typeId:5,typeName:"箱包"},
        {typeId:6,typeName:"化妆品"},
        {typeId:7,typeName:"食品"},
        {typeId:8,typeName:"玩具"},
        {typeId:9,typeName:"服装"},
        {typeId:10,typeName:"饰品"},
        {typeId:11,typeName:"潮玩"},
    ],
    // 分类商品
    products:[
        // 手机
       {
        pid:1,   // 商品id
        pname:"ipone14", // 名称
        price:4899,  // 价格
        typeId:1,  // 商品所属分类  
        imgPath:"https://img13.360buyimg.com/n1/s450x450_jfs/t1/216195/20/29658/31704/644ba397Fe505720f/4b8116faaf720a1a.jpg"// 商品图片
        },
        {
            pid:2,   // 商品id
            pname:"ipone14", // 名称
            price:4899,  // 价格
            typeId:1,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/44507/1/27860/32763/644b9817F50b7a500/b0f05603bc20ea04.jpg"// 商品图片
         },
         {
            pid:3,   // 商品id
            pname:"huawei p60", // 名称
            price:3888,  // 价格
            typeId:1,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/215135/34/28783/51341/6447a07dF50865320/38f00b2b1235bb4d.jpg"// 商品图片
        } ,
        {
            pid:4,   // 商品id
            pname:"华为meta50", // 名称
            price:4499,  // 价格
            typeId:1,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/193925/15/34557/68065/643fd33aFcb6e1c79/bb375b5dc0b2b6b6.jpg"// 商品图片
        },
        {
            pid:5,   // 商品id
            pname:"小米12s", // 名称
            price:3499,  // 价格
            typeId:1,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/121162/23/29940/49530/6333dfc8E2cbff45b/2a36af73530dbbff.jpg"// 商品图片
        },
        {
            pid:6,   // 商品id
            pname:"小米13", // 名称
            price:4599,  // 价格
            typeId:1,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/220010/38/27498/36926/643907d7Ff0cbf46d/ae673b9baf8217a7.jpg"// 商品图片
        },   
        {
            pid:7,   // 商品id
            pname:"三星s23+", // 名称
            price:5788,  // 价格
            typeId:1,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/148305/8/33735/27332/6400677eFfa2dffb0/8f78feb28f3d7955.png"// 商品图片
        }, 
        // 空调
        {
            pid:8,   // 商品id
            pname:"Aux 1.5匹", // 名称
            price:2199,  // 价格
            typeId:2,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/201694/13/33351/129677/644c8488Fbcab03b0/f70eb5e6658c5760.jpg"// 商品图片
        }, 
        {
            pid:9,   // 商品id
            pname:"小米 1.5匹", // 名称
            price:2099,  // 价格
            typeId:2,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/204655/3/33155/70891/644b7651F2f375400/9fc44f5a11048b5a.jpg"// 商品图片
        },
        {
            pid:10,   // 商品id
            pname:"TCL 1.5匹", // 名称
            price:1599,  // 价格
            typeId:2,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/154040/17/31422/134832/644d281dFd892f223/3b4ad457b5ce1324.jpg"// 商品图片
        }, 
        {
            pid:11,   // 商品id
            pname:"康佳 1.5匹", // 名称
            price:1599,  // 价格
            typeId:2,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/220421/27/26176/95140/644cf2a0Fb244238a/7e552a85f8ce158b.jpg"// 商品图片
        }, 
        {
            pid:12,   // 商品id
            pname:"格力1.5匹", // 名称
            price:2749,  // 价格
            typeId:2,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/174506/12/37226/128300/644c8dd4Fed39d6aa/9a69c000d67a1e18.jpg"// 商品图片
        }, 
        {
            pid:13,   // 商品id
            pname:"美的1.5匹", // 名称
            price:2399,  // 价格
            typeId:2,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/215170/8/29225/118877/644ce430Ff9b04ed3/36f3a7426f1c7868.jpg"// 商品图片
        }, 
        // 电脑
        {
            pid:14,   // 商品id
            pname:"MacBookAir 13.3", // 名称
            price:7999,  // 价格
            typeId:3,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/102522/14/37803/35777/64463a41Fa4fcc164/3c1267161efd9b28.jpg"// 商品图片
        },               
        {
            pid:15,   // 商品id
            pname:"MateBookD 14", // 名称
            price:3699,  // 价格
            typeId:3,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/147227/33/31508/29528/6433e1d5F9a03d26f/ebbe8e1aa8bd2148.jpg"// 商品图片
        },               
        {
            pid:16,   // 商品id
            pname:"dell灵越3511", // 名称
            price:3599,  // 价格
            typeId:3,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/10307/28/22295/58261/644a151bF0a407b3d/181f5090d0c34507.jpg"// 商品图片
        },               
        {
            pid:17,   // 商品id
            pname:"华硕Vivobook15", // 名称
            price:2799,  // 价格
            typeId:3,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/197955/37/32543/45565/642fb27dF44a05ee7/f1210dffa51d3682.jpg"// 商品图片
        },               
        {
            pid:18,   // 商品id
            pname:"联想ThinkPad", // 名称
            price:4899,  // 价格
            typeId:3,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/145810/10/34477/52225/64101a5eF82024582/e6f577a5b1f79751.jpg"// 商品图片
        },               
        {
            pid:19,   // 商品id
            pname:"宏碁(Acer)", // 名称
            price:3349,  // 价格
            typeId:3,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/111366/38/32789/54695/639d6d08Ef0dd7203/392b0afa8324adda.jpg"// 商品图片
        },
        // 洗衣机
        {
            pid:20,   // 商品id
            pname:"SIEMENS滚筒", // 名称
            price:3349,  // 价格
            typeId:4,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/64278/17/21599/83003/6447b9e5F24975722/45a726d801b9a952.jpg"// 商品图片
        },               
        {
            pid:21,   // 商品id
            pname:"LittleSwan波轮", // 名称
            price:849,  // 价格
            typeId:4,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/77797/21/26033/151062/644d0ff4F79333f4e/aa045bb3fd696aa5.jpg"// 商品图片
        },               
        {
            pid:22,   // 商品id
            pname:"海尔波轮", // 名称
            price:879,  // 价格
            typeId:4,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/71796/34/21234/161354/644bd404F0a2b911c/3968e720d8df1d65.jpg"// 商品图片
        },               
        {
            pid:23,   // 商品id
            pname:"美的全自动波轮", // 名称
            price:899,  // 价格
            typeId:4,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/107863/40/37411/116503/644d1a9fF1eccd126/c23e0b7496a0a7b1.jpg"// 商品图片
        },               
        {
            pid:24,   // 商品id
            pname:"TC波轮 10KG", // 名称
            price:669,  // 价格
            typeId:4,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/108726/27/35271/74536/644cf870F279ff12f/9d353b780a9a1364.jpg"// 商品图片
        },               
        {
            pid:25,   // 商品id
            pname:"SKYWORTH滚筒 8KG", // 名称
            price:1099,  // 价格
            typeId:4,  // 商品所属分类  
            imgPath:"https://img14.360buyimg.com/n0/jfs/t1/96257/8/34948/139669/644b757cF3cd1baba/67f1d6c4fd9eee92.jpg"// 商品图片
        }  
        // 其他....             
    ]
}

export default data;