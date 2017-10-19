<template>
  <nav class="struct-aside">
    <ul>
      <li v-for="(val,index) in links">
        <a :href="val.url" 
          v-if="val.url" 
          class="chapter-title" 
          :class="{'linkActive':activeIndex[0]==index}" 
          :target="val.target||'_black'" 
          @click="linkAction($event,index)">{{ val.name }}</a>
        <h3 v-if="!val.url" class="chapter-title">{{ val.name }}</h3>
        <ul v-if="val.children">
          <li v-for="(childVal,childIndex) in val.children">
            <a :href="childVal.url" 
              class="chapter-list" 
              :class="{'linkActive':activeIndex[0]==index&&activeIndex[1]==childIndex}" 
              :target="val.target||'_black'" 
              @click="linkAction($event,index,childIndex)">{{ childVal.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
    <slot name="content"></slot>
  </nav>
</template>
<script>
export default {
  name: 'struct-aside',
  props:{
    links:{
      type:Array,
      default(){
        return []
      }
    },
    initActive:{
      type:Array,
      default(){
        return [0,0];
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex:[0,0]
    }
  },
  computed:{
  },
  methods:{
    linkAction(e,parent,child){
      this.$set(this.activeIndex,0,parent);
      //this.activeIndex[0] = parent;
      if(child!= undefined){
        this.activeIndex[1] = child;
      }
      console.log(arguments);
    }
  },
  created(){
    this.activeIndex = this['initActive'];
  }
}
</script>

<style>
  .struct-aside{
    position:fixed;
    left:0;
    top:72px;
    width:300px;
    padding:20px 20px 0;
    overflow:auto;
    height:calc(100% - 72px);
  }
  .struct-aside ul{
    list-style:none;
    margin: 15px 0;
    padding:0 0 0 1em;
  }
  .struct-aside li{
    margin: 15px 0;
  }
  .struct-aside a{
    color:#333;
    text-decoration:none;
  }
  .struct-aside a:hover,.struct-aside .linkActive{
    color:#088bc3;
  }
  .struct-aside .chapter-title{
    font-size:1.1em;
    font-weight:bold;
  }
  .struct-aside .chapter-list{
    font-weight:normal;
  }
 
</style>
