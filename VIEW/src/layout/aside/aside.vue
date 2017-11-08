<template>
  <nav class="struct-aside" :class="{expandable:expandable}" :style="css">
    <ul>
      <li v-for="(val,index) in links" 
        class="parent-list" 
        :class="{noexpanded:!expandedList[index]}">
        <div class="marker" v-if="val.children" :class="{'linkActive':activeIndex[0]==index&&val.url}"></div>
        <a :href="val.url+version" 
          v-if="val.url" 
          class="chapter-title" 
          :class="{'linkActive':activeIndex[0]==index}" 
          :target="val.target||'_blank'" @click="linkAction($event,index,null,'parent')">{{ val.name }}</a>
        <h3 v-if="!val.url" class="chapter-title" @click="linkAction($event,index,null,'parent')">
          {{ val.name }}
        </h3>

        <ul v-if="val.children">
          <li v-for="(childVal,childIndex) in val.children" class="child-list">
            <a :href="childVal.url+version" 
              class="chapter-list" 
              :class="{'linkActive':activeIndex[0]==index&&activeIndex[1]==childIndex}" 
              :target="val.target||'_blank'" 
              @click.stop="linkAction($event,index,childIndex,'child')"><span v-if="expandable">–</span> {{ childVal.name }}</a>
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
    },
    expandable:{
      type:Boolean,
      default:false
    },
    css:{
      type:Object,
      default(){
        return {};
      }
    },
    dev:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex:[0,0],
      expandedList:[],
      v:Date.now()
    }
  },
  computed:{
    version(){
      return this.dev?('?'+this.v):'';
    }
  },
  methods:{
    linkAction(e,parent,child,from){
      if(from=='parent'){
        if(this.expandable){
          this.$set(this.expandedList,parent,!this.expandedList[parent]);
        }
        
        if(!this.links[parent].url){
          return;
        }
      }      
      
      this.$set(this.activeIndex,0,parent);
      
      //this.activeIndex[0] = parent;
      if(from=='child'){
        if(child!= undefined){
          this.activeIndex[1] = child;
        }
      }else{
        this.activeIndex[1] = null;
      }
      
      console.log(arguments);
    }
  },
  created(){
    this.activeIndex = this['initActive'];
    this.expandedList = this.links.map((item)=>{
      if(!this.expandable){
        return true;
      }
      return item.expanded;
    })
  }
}
</script>

<style>
  .struct-aside{
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
    cursor:default;
  }
  .struct-aside .chapter-list{
    font-weight:normal;
  }
  .struct-aside .parent-list.noexpanded ul{
    display:none;
  }

  .struct-aside.expandable .noexpanded .marker{
    
    margin-left: -10px;
    margin-top: 4px;   
   
    border-width: 4px 0 4px 5px;
    border-color: transparent transparent transparent #333;
  }
  .struct-aside.expandable .noexpanded .marker.linkActive{
    border-color: transparent transparent transparent #088bc3;
  }
  .struct-aside.expandable .marker{
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    margin-left: -12px;
    margin-top: 4px;
    border-width: 0 0 6px 6px;
    border-color: transparent transparent #333;
    
  }
  .struct-aside.expandable .marker.linkActive{
    border-color: transparent transparent #088bc3;
  }
  
</style>
