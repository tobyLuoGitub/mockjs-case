<template>
  <div class="hello">
    <div class="content">

    </div>
    <div class="page-btn">
      <span @click="pageData(index)" v-for="(item,index) in page" :key="index">{{item}}</span>
    </div>
    <button @click="imgData(5)">点击获取轮播图信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      page: [1,2,3,4,5,6],
      list: [],
    }
  },
  methods:{
    pageData(index){  //分页
      console.log(index)
      axios.post('/pageData',{ endPage: index+1, pageSize: 3 }).then(res=>{
        this.list = res.data.list
        console.log(res.data)
      })
    },

    imgData(num){  // 轮播
      axios.post('/imgData',{ num: num}).then(res=>{
        console.log(res.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.page-btn>span {
  padding: 5px;
  border: 1px solid #ccc;
  text-align: center;
}
</style>
