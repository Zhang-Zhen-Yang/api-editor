<template>
  <div class="struct">
    <nav>
    </nav>
    <div class="container">
      <slot name="aside"></slot>
      <article>
        <slot name="article"></slot>
      </article>
    </div>
    <footer>
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
  nav{
    width:100%;
    height:72px;
    position:fixed;
    top:0;
    /*border-bottom:1px solid #aaa;*/
    background-color:white;
    box-shadow:0 3px 20px rgba(0,0,0,0.2);
    z-index:1;
  }
  .container{
    width:100%;
    border-left:300px solid transparent;
    position:relative;
    top:0;
    left:0;
    border-top:72px solid red;
    margin:0 auto;
    overflow:auto;
  }
  aside{
    position:fixed;
    left:0;
    top:72px;
    width:300px;
    overflow:auto;
    height:calc(100% - 72px);
  }
  article{
    width:100%;
  }

</style>
