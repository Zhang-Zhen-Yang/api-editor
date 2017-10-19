<template>
  <div class="struct">
    <slot name="header">
    </slot>
    <div class="container">
      <slot name="aside"></slot>
      <article>
        <slot name="article"></slot>
      </article>
    </div>
    <slot name="scrolltop">
    </slot>
    <footer style="position:absolute;bottom:0;width:100%;height:100px;background-color:red;">
      footerfdg sfdg sdfg 
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
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
    height:100%;
    border-left:300px solid transparent;
    position:fixed;
    top:0;
    left:0;
    border-top:72px solid transparent;
    border-bottom:100px solid transparent;
    margin:0 auto;
    overflow:auto;
  }
  
  article{
    width:100%;
  }
  .struct{
    min-height:100%;
  }

</style>
