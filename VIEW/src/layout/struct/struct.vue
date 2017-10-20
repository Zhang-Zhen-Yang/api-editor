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
    /*height:100%;*/
    border-top:72px solid transparent;
    border-left:300px solid transparent;
    /*position:fixed;*/
    top:0;
    left:0;   
    margin:0 auto;
    overflow:auto;
  }
  article{
    width:100%;
  }
</style>
