<template>
  <div id="app">



  <MarkDown>
  ## MaHua是什么?

  - [x] This is a complete item
  - [ ] This is an incomplete item

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


  :sparkles: :camel: :boom:

  ```js
  console.log("hello"); 
  ```

  First Header | Second Header
  ------------ | -------------
  Content from cell 1 | Content from cell 2
  Content in the first column | Content in the second column

  ![](https://ws1.sinaimg.cn/large/d63ab74bly1fke7hvrtl5j209n0dwtef.jpg)
  ![](https://ws1.sinaimg.cn/large/d63ab74bly1fke7hvt7efj209o0dwdl4.jpg)
  ![](http://imgs.aixifan.com/live/1507796966930/1507796966930.jpg)
  ![](http://inews.gtimg.com/newsapp_match/0/2060744860/0)
  </MarkDown>
  <MarkDown> 
   First Header | Second Header  | Second Header
  ------------ | -------------
  Content from cell 1 | Content from cell 2 | Content from cell 3
  Content in the first column | Content in the second column | Content in the second column 
  ![](https://ws1.sinaimg.cn/large/d63ab74bly1fke7hvrv51j209l0dwjwr.jpg)
  ![](https://ws1.sinaimg.cn/large/d63ab74bly1fke7hvt7efj209o0dwdl4.jpg)

  ![](http://imgs.aixifan.com/live/1507749525266/1507749525266.jpg)
  </MarkDown>


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
import MarkDown from './component/MarkDown.vue'
export default {
  name: 'app',
  components:{ MarkDown },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
