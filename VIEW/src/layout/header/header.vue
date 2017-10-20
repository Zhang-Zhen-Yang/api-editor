<template>
  <header class="struct-header">
    <div style="float:left;">
      <slot name="logo"></slot>
    </div>
    <div style="float:left;">
      <slot name="nav"></slot>
    </div>
    <slot name="default"></slot>
  </header>
</template>

<script>
export default {
  name: 'struct-header',
  data () {
    return {
     
    }
  },
  computed:{
  },
  methods:{
    
  }
}
</script>

<style>
  .struct-header{
    width:100%;
    height:72px;
    position:fixed;
    top:0;
    /*border-bottom:1px solid #aaa;*/
    background-color:white;
    box-shadow:0 3px 20px rgba(0,0,0,0.2);
    z-index:1;
  }
</style>
