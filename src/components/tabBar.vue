<template>
    <div class="wrapper">
         <!--<div v-for="i in items">-->
            <!--<div class="bar-item" @click="tabTo(i.key)">-->
                <!--<text class="bar-ic iconfont">{{i.icon}}</text>-->
                <!--<text class="bar-txt">{{i.name}}</text>-->
            <!--</div>-->
        <!--</div>-->
        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont" :class="[this.isActive('home')]">&#xe660;</text>
            <!-- 用方法渲染class，data改变了，重新渲染template，所以方法就会再次执行，得到返回值 -->
            <text @click="handleUp" class="bar-txt" :class="[this.isActive('home')]">首页{{dataliu}}{{ageValue}}</text>
        </div>
        <div class="bar-item" @click="tabTo('topic')">
            <text class="bar-ic iconfont" :class="[this.pIndexKey == 'topic' ? 'bar-active' : '']">&#xe744;</text>
            <text class="bar-txt" :class="[this.pIndexKey == 'topic' ? 'bar-active' : '']">专题</text>
            <text class="notice-dot"></text>
        </div>
        <div class="bar-item" @click="tabTo('class')">
            <text class="bar-ic iconfont" :class="[this.isActive('class')]">&#xe605;</text>
            <text class="bar-txt" :class="[this.isActive('class')]">分类</text>
        </div>
        <div class="bar-item" @click="tabTo('shop')">
            <text class="bar-ic iconfont" :class="[this.isActive('shop')]">&#xe61a;</text>
            <text class="bar-txt" :class="[this.isActive('shop')]">购物车</text>
        </div>
        <div class="bar-item" @click="tabTo('my')">
            <text class="bar-ic iconfont" :class="[this.isActive('my')]">&#xe639;</text>
            <text class="bar-txt" :class="[this.isActive('my')]">个人</text>
            <text class="i-notice">2</text>
        </div>
    </div>
</template>

<style scoped>
    .iconfont {
        font-family: iconfont;
    }
    .wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 90px;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: nowrap;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item {
        flex: 1;
    }
    .bar-ic {
        padding-top: 14px;
        font-size: 38px;
    }
    .bar-active {
        color:#b4282d;
    }
    .bar-txt{
        font-size: 22px;
        padding-top: 2px;
    }
    .bar-txt,
    .bar-ic {
        color:#666;
        text-align: center;
    }
    .notice-dot {
        position: absolute;
        top:15px;
        right: 40px;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        background-color: #f00;
    }
    .i-notice{
        position: absolute;
        top:10px;
        right: 30px;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        font-size: 26px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #f00;
    }
</style>

<script>
    export default {
        props: ['dataliu', 'ageValue'],
        data() {
            return {
                pIndexKey: 'home',
                age: 1
            }
        },
        methods: {
            handleUp() {
                console.log('点击事件');
                // let a = this.age;
                // a = a + 'abc';
                // return a;
                // this.$emit('up', '数据');
            },
            isActive(_c) {
                return this.pIndexKey === _c ? 'bar-active' : '';
            },
            tabTo(_key){
                if(this.pIndexKey === _key) return;
                this.pIndexKey = _key;
                this.age = _key;
                this.$emit('tabTo',{
                    status : 'tabTo',
                    data : {
                        key : _key
                    }
                })
            }
        }
    }
</script>


