# Introduction

This boilerplate is targeted towards large, serious projects and assumes you are somewhat familiar with Webpack and `weex-loader`. 

## Quickstart

To use this template, scaffold a project with [weexpack v1.1.1+](https://github.com/weexteam/weex-pack).

``` bash
$ npm install -g weex-toolkit
$ weex create my-project # default will create the webpack template
$ cd my-project && npm start
```

## How to use less/sass/pug

Take `sass` for example:

```
$ npm i node-sass sass-loader --save
```

Then, you just need to change the `style` tag as: `<style lang="sass"><style>`.

## How to create your own template

See [How-to-create-your-own-template](https://github.com/weex-templates/How-to-create-your-own-template).

* vue 行内样式写法
```
<div>
    <text :style="{'color': 'red'}">1111</text>
</div>
```

* slot 用于渲染自定义组件的子元素，内的组件

* 循环，渲染出来是里面的
```
<div v-for="item in tabItems" :key="item.index">
<text>{{item.title}}</text>
</div>
```

* v-if 和 v-show的区别
v-if 的值是false，页面不会有这个html标签
v-show 不管true 还是false，html都会存在，只是display显示隐藏

* 自定义事件
<vue-com @liu="methos"></vue-com>
子组件触发，this.$emit('liu', param)

* v-if v-else
<text v-if="false">1</text>
<text v-else>2</text>

* mixin
当前组件注册的，只能在当前组件使用，不能在子组件使用，
在index.js全局注入的，在所有地方都可以使用

* :充当js变量

* v-model 
给组件添加 v-model 属性时，默认会把 value 作为组件的属性


## weex 坑总结
* slider组件
设置宽高默认居中
两个以上图片能持续拖动滑动，两个有点小问题

* image
必须指定宽高

### 内置模块
* 设置头部 titleBar
```
设置头部
const titleBar = weex.requireModule('titleBar');
titleBar.setTitle('name');
titleBar.setStyle({
    foregroundColor: 'red', // 字体颜色
    backgroundColor: 'green' // 背景颜色
});
titleBar.registTRButton({ // 注册右侧按钮
    title: '',
    icon: 'https://imagesize.hrwork.com/sp/files/f903da17-e221-408f-994f-0a69e6510f52.png'
}, event => { // 点击执行的事件
    const refreshModule = weex.requireModule('event');
    refreshModule.refresh();
})
```
* 事件 event
const refreshModule = weex.requireModule('event');
refreshModule.refresh(); // 重新刷新当前页面