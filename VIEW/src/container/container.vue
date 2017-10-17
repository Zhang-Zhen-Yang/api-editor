<template>
  <div class="container">
  <div class="nav">
  </div>
  <div class="content">
    <div class="aside">
      aside

      内建模块

      animation
      WebSocket
      picker
      meta
      clipboard
      dom
      modal
      navigator
      storage
      stream
      webview
      globalEvent
      CSS 单位

      通用事件

      Native DOM APIs

      Weex 实例变量

      Web 标准

      JS Service

      Vue

      Vue 2.x 在 Weex 和 Web 中的差异
      使用 Vuex 和 vue-router
      高阶知识

      iOS 扩展
      Android 扩展
      HTML5 扩展
      拓展 JS framework
      集成 Devtools 到 Android
      集成 Devtools 到 iOS
      Weex 和 Web 平台的差异

      迁移
      如何将原有 Weex 项目改造成 Vue 版本
      Weex 和 Vue 2.x 的语法差异
      通用样式
      Updated time: 13/09/2017
      所有 Weex 组件都支持以下通用样式规则。

      盒模型
      box model @300*

      Weex 盒模型基于 CSS 盒模型，每个 Weex 元素都可视作一个盒子。我们一般在讨论设计或布局时，会提到「盒模型」这个概念。

      盒模型描述了一个元素所占用的空间。每一个盒子有四条边界：外边距边界 margin edge, 边框边界 border edge, 内边距边界 padding edge 与内容边界 content edge。这四层边界，形成一层层的盒子包裹起来，这就是盒模型大体上的含义。

      注意：
      Weex 对于长度值目前只支持像素值，不支持相对单位（em、rem）。

      width {length}：，默认值 0
      height {length}：，默认值 0
      padding {length}：内边距，内容和边框之间的距离。默认值 0

      可有如下写法：

      padding-left {length}：，默认值 0
      padding-right {length}：，默认值 0
      padding-top {length}：，默认值 0
      padding-bottom {length}：，默认值 0
      margin：

      外边距，元素和元素之间的空白距离。值类型为 length，默认值 0

      可有如下写法：

      margin-left {length}：，默认值 0
      margin-right {length}：，默认值 0
      margin-top {length}：，默认值 0
      margin-bottom {length}：，默认值 0
      border：

      设定边框，border 目前不支持类似这样 border: 1 solid #ff0000; 的组合写法。

      可有如下写法：

      border-style：

      设定边框样式，值类型为 string，可选值为 solid | dashed | dotted，默认值 solid

      可有如下写法：

      border-left-style {string}：可选值为 solid | dashed | dotted，默认值 solid
      border-top-style {string}：可选值为 solid | dashed | dotted，默认值 solid
      border-right-style {string}：可选值为 solid | dashed | dotted，默认值 solid
      border-bottom-style {string}：可选值为 solid | dashed | dotted，默认值 solid
      border-width {length}：

      设定边框宽度，非负值, 默认值 0

      可有如下写法：

      border-left-width {length}：，非负值, 默认值 0
      border-top-width {length}：，非负值, 默认值 0
      border-right-width {length}：，非负值, 默认值 0
      border-bottom-width {length}：，非负值, 默认值 0
      border-color {color}：

      设定边框颜色，默认值 #000000

      可有如下写法：

      border-left-color {color}：，默认值 #000000
      border-top-color {color}：，默认值 #000000
      border-right-color {color}：，默认值 #000000
      border-bottom-color {color}：，默认值 #000000
      border-radius {length}：

      设定圆角，默认值 0

      可有如下写法：

      border-bottom-left-radius {length}：，非负值, 默认值 0
      border-bottom-right-radius {length}：，非负值, 默认值 0
      border-top-left-radius {length}：，非负值, 默认值 0
      border-top-right-radius {length}：，非负值, 默认值 0
      flex 成员项。如果一个 Weex 元素可以容纳其他元素，那么它就成为 flex 容器。需要注意的是，flexbox 的老版规范相较新版有些出入，比如是否能支持 wrapping。这些都描述在 W3C 的工作草案中了，你需要注意下新老版本之间的不同。另外，老版本只在安卓 4.4 版以下得到支持。

      Flex 容器
      在 Weex 中，Flexbox 是默认且唯一的布局模型，所以你不需要手动为元素添加 display: flex; 属性。

      flex-direction：

      定义了 flex 容器中 flex 成员项的排列方向。可选值为 row | column，默认值为 column

      column：从上到下排列。
      row：从左到右排列。
      justify-content：

      定义了 flex 容器中 flex 成员项在主轴方向上如何排列以处理空白部分。可选值为 flex-start | flex-end | center | space-between，默认值为 flex-start。

      flex-start：是默认值，所有的 flex 成员项都排列在容器的前部；
      flex-end：则意味着成员项排列在容器的后部；
      center：即中间对齐，成员项排列在容器中间、两边留白；
      space-between：表示两端对齐，空白均匀地填充到 flex 成员项之间。
      justify-content @400*

      align-items：

      定义了 flex 容器中 flex 成员项在纵轴方向上如何排列以处理空白部分。可选值为 stretch | flex-start | center | flex-end，默认值为 stretch。

      stretch 是默认值，即拉伸高度至 flex 容器的大小；
      flex-start 则是上对齐，所有的成员项排列在容器顶部；
      flex-end 是下对齐，所有的成员项排列在容器底部；
      center 是中间对齐，所有成员项都垂直地居中显示。
      align-items @400*

      Flex 成员项
      flex 属性定义了 flex 成员项可以占用容器中剩余空间的大小。如果所有的成员项设置相同的值 flex: 1，它们将平均分配剩余空间. 如果一个成员项设置的值为 flex: 2，其它的成员项设置的值为 flex: 1，那么这个成员项所占用的剩余空间是其它成员项的2倍。

      flex {number}：值为 number 类型。
      示例
      一个简单的网格布局。

      mobile_preview


    </div>

    <div class="articles">
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

    [kotlin](http://www.kotlincn.net/docs/reference/basic-types.html#浮点数比较)

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
    </div>
    
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
  },
  methods:{
    
  }
}
</script>

<style>
  .container{
    width:100%;
  }
  .nav{
    width:100%;
    height:72px;
    position:fixed;
    top:0;
    /*border-bottom:1px solid #aaa;*/
    background-color:white;
    box-shadow:0 3px 20px rgba(0,0,0,0.2);
    z-index:1;
  }
  .content{
    width:1200px;
    position:relative;
    top:0;
    left:0;
    border-top:72px solid red;
    margin:0 auto;
    overflow:auto;
  }
  .aside{
    position:fixed;
    left:0;
    top:72px;
    width:300px;
    overflow:auto;
    height:calc(100% - 72px);
  }
  .articles{
    /*float:right;
    width:calc( 100% - 300px );*/
    width:100%;
  }
</style>
