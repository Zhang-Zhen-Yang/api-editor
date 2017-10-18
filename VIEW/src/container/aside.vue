<template>
  <div class="v-aside">
    <ul>
      <li v-for="(val,index) in link">
        <a :href="val.url" v-if="val.url" class="chapter-title">{{ val.name }}</a>
        <h3 v-if="!val.url" class="chapter-title">{{ val.name }}</h3>
        <ul v-if="val.children">
          <li v-for="(childVal,childIndex) in val.children">
            <a :href="childVal.url" class="chapter-list">{{ childVal.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      link:[
        {name:'通用特性',url:'https://www.bilibili.com/',target:'_blank',children:[
          {name:'iOS APIs',url:'http://weex-project.io/cn/references/index.html'},
          {name:'Android APIs',url:'http://weex-project.io/cn/references/index.html'},
          {name:'降级方案'}
        ]},
        {name:'内建组件',target:'_blank'},
        {name:'orange',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'apple',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'apple',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'apple',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'apple',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'banana',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'apple',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'apple',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'apple',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'apple',url:'https://www.bilibili.com/',target:'_blank'},
        {name:'apple',url:'https://www.bilibili.com/',target:'_blank'}
      ]
    }
  },
  computed:{
  },
  methods:{
    
  }
}
</script>

<style>
  .v-aside{
    position:fixed;
    left:0;
    top:72px;
    width:300px;
    overflow:auto;
    height:calc(100% - 72px);
  }
  .v-aside ul{
    list-style:none;
  }
  .v-aside a{
    color:#333;
    text-decoration:none;
  }
  .v-aside a:hover{
    color:#088bc3;
  }
  .v-aside .chapter-title{
    font-size:1.1em;
    font-weight:bold;
  }
  .v-aside .chapter-list{
    font-weight:normal;
  }
  
</style>
