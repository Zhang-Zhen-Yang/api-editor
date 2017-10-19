<template>
  <div class="struct-scrolltop" @click="scrolltop" :style="style">
  </div>
</template>

<script>
export default {
  name: 'struct-nav',
  props:{
    target:{
      type:String,
      default:'remote'
    }
  },
  data () {
    return {
      msg: 'scrolltop',
      style:{'background-image':'url(./image/scrolltop.png)'}
    }
  },
  computed:{
  },
  methods:{
    scrolltop(){
      try{
        document.body.scrollTop = 0;
        if(window[this.target]){
          window[this.target].scroll(0,0);
        }
      }catch(e){
        console.warn(e);
      }
      
    }
  }
}
</script>

<style>
  .struct-scrolltop{
    position:fixed;
    width:60px;
    height:60px;    
    bottom:30px;
    right:30px;
    cursor:pointer;
    border-radius:50%;
    background-color:white;
    box-shadow:0 2px 20px rgba(0,0,0,0.2);
    z-index:1;
    background-size:50% auto;
    background-repeat:no-repeat;
    background-position:center center;
  }
  .struct-scrolltop:hover{
    box-shadow:0 2px 25px rgba(0,0,0,0.3);
  }
</style>
