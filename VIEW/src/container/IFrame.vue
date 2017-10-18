<template>
  <div class="iframe">
    <iframe src="https://www.bilibili.com/" id="self" frameborder="0" ref="frame">
    </iframe>
    <div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IFrame',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  computed:{

  },
  methods:{
    
  },
  created(){
    
    /*this.frame.onload = ()=>{
      console.log('load');
    }*/
  },
  mounted(){
    this.frame = this.$refs.frame;
    this.$refs.frame.onload=(e)=>{
      console.log(this.frame.contentWindow.document);
      console.log('load8888888888888888888888');
    }
  }
}
</script>
<style>
  .iframe iframe{
    /*width:0;
    height:0;*/
  }
</style>
