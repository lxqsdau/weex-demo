<template>
    <div class="app-wrapper">
        <home-header></home-header>
        <top-channel></top-channel>
        <scroller :class="['main-list']" offset-accuracy="300" loadmoreoffset="300" 
        @loadmore="onloadmore">
            <!-- <refresher @loadingDown="loadingDown"></refresher> -->
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
            <text>1</text>
        </scroller>

    </div>
</template>

<style scoped>
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
            }
        }
    }
</script>