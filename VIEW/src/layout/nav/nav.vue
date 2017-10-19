<template>
  <nav class="struct-nav">
    <ul>
      <li v-for="(link,index) in links">
        <a :href="link.url" :target="link.target||'_blank'">{{ link.name }}</a>
      </li>
    </ul>
    <slot name="default"></slot>  
  </nav>
</template>

<script>
export default {
  name: 'struct-nav',
  props:{
    links:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed:{
  },
  methods:{
    
  }
}
</script>

<style>
  .struct-nav{
    width:100%;
    height:72px;
    position:static;
    z-index:1;
  }
  .struct-nav ul{
    list-style-type:none;
    margin:0;
    line-height:72px;
  }
  .struct-nav li{
    display:inline-block;
    font-size:20px;
    margin:0 10px;
    line-height:
  }
  .struct-nav a{
    color:#222;
    text-decoration:none;
  }
  .struct-nav a:hover{
    border-bottom:3px solid #088bc3;
  }

</style>
