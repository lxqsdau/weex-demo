<template>
  <div class="app-wrapper">
    <router-view class="r-box"></router-view>
    <!-- <div class="test-text">
      <text class="text">哈哈哈 几号回家啊加加加加加Joe监察局二噢哟就饿哦就给偶加的金额奇偶了解 </text>
      <text>111</text>
    </div> -->
    <!-- <tab-bar @up="change" :age-value="msg" dataliu="123"></tab-bar> -->
    <tab-bar @tabTo="onTabTo"></tab-bar>
  </div>
</template>

<script>
  import tabBar from './components/tabBar.vue';
  import util from './util';
  export default {
    name: 'App',
    data () {
      return {
        msg: 'vue实例'
      }
    },
    components: {
      tabBar
    },
    created () {
      util.initIconFont();
    },
    methods: {
      change(msg) {
        console.log('change', msg)
      },
      onTabTo(_result) {
        let _key = _result.data.key || '';
        this.$router && this.$router.push('/' + _key);
      }
    }
  }
</script>



<style scoped>
  
  .app-wrapper {
    /* justify-content: center; */
    /* align-items: center; */
    background-color: #f4f4f4;
  }
  .test-text {
    width: 100px;
    height: 200px;
    border-width: 1px;
    border-style: solid;
    border-color: blue;
    padding-top: 20px;
  }
  .text {
    lines: 3; /*设置显示的函数，仅在text组件有效*/
    color: #666;
    text-overflow:ellipsis; /*超出省略号显示*/
    /* font-size: 40px; */
  }
  
  /* .r-box {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: red;
  } */
</style>
