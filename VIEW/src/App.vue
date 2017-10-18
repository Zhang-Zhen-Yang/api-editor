<template>
  <div id="app">
    <container>
    </container>
    <!--<div v-md>

    ## MaHua是什么?


        * 方便的`导入导出`功能
        *  直接把一个markdown的文本文件拖放到当前这个页面就可以了
        *  导出为一个html格式的文件，样式一点也不会丢失
    * 编辑和预览`同步滚动`，所见即所得（右上角设置）
    * `VIM快捷键`支持，方便vim党们快速的操作 （右上角设置）
    * 强大的`自定义CSS`功能，方便定制自己的展示
    * 有数量也有质量的`主题`,编辑器和预览区域
    * 完美兼容`Github`的markdown语法
    * 预览区域`代码高亮`
    * 所有选项自动记忆


    ![](https://ws1.sinaimg.cn/large/d63ab74bly1fke7hvrtl5j209n0dwtef.jpg)
    ![](https://ws1.sinaimg.cn/large/d63ab74bly1fke7hvt7efj209o0dwdl4.jpg)
    </div>-->



  </div>
</template>

<script>
import container from './container/container.vue'
export default {
  name: 'app',
  components:{ container },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
  body{
    margin:0;
    padding:0;
    /*font-family:微软雅黑;*/
    background: #fff;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
    line-height: 120%;
    color: #333;
    -webkit-tap-highlight-color: transparent;
  }
  body *{
    box-sizing:border-box;
  }
</style>
