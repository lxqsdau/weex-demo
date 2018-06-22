<template>
    <div class="app-wrapper">
        <home-header></home-header>
        <top-channel></top-channel>
        <scroller class="scroller" @loadmore="fetch" loadmoreoffset="10" >
            <div v-for="(num, i) in lists" :key="i">
            <div class="panel">
                <text class="text">{{num}}</text>
            </div>
            </div>
        </scroller>

    </div>
</template>

<style scoped>
.scroller {
    height: 500px;
}
.panel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 100px;
    text-align: center;
    color: #41B883;
  }
    .main-list{
        position: fixed;
        top: 168px;
        /* bottom: 90px; */
        bottom: 300px;
        left: 0;
        right: 0;
        /*margin-top: 167px;*/
        /*margin-bottom: 90px;*/
        background-color: red;
    }
</style>

<script>
    var modal = weex.requireModule('modal');
    import Header from '../../components/Header.vue';
    import topChannel from '../../components/topChannel.vue';
    import refresher from '../../components/refresh.vue';
    let mix = {
        created() {
            console.log('实例创建完成');
        }
    }
    export default {
        mixins: [mix], // 局部混入
        // 同名钩子函数将混合为
        data() {
            return {
                makers: {
                    title:'品牌SS制造商直供',
                    items: []
                },
                lists: [1, 2, 3, 4, 5]
            }
        },
        created() {
            console.log('自己的')
        },
        components: {
            'home-header': Header,
            'top-channel': topChannel,
        },
        methods: {
            onloadmore() {
                modal.toast({ message: 'loading', duration: 0.3 })
            },
            fetch() {
                modal.toast({ message: 'loading', duration: 0.3 })
                setTimeout(() => {
          const length = this.lists.length
          for (let i = length; i < length + 4; ++i) {
            this.lists.push(i + 1)
          }
        }, 800)
            }
        }
    }
</script>