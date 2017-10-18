<template>
  <div class="iframe">
    <div class="iframe-wrap">
      <iframe :src="src" name="iframe" frameborder="0" ref="frame">
      </iframe>
    </div>    
    <div class="iframe-content">
      <dynamic v-if="rendered"></dynamic>
    </div>
  </div>
</template>

<script>
//import dynamic from '../Dynamic/Dynamic.vue'
export default {
  name: 'v-iframe',
  components:{ },
  data () {
    return {
      src:'iframe2.html',
      msg: 'Welcome',
      iframeValue:'',
      rendered:false
    }
  },
  computed:{

  },
  methods:{
    
  },
  created(){
    
  },
  mounted(){
    this.frame = this.$refs.frame;
    this.$refs.frame.onload=(e)=>{
      console.log('load');
      let href = this.frame.contentWindow.location.href,iframeValue;
      if(href.endsWith('.md')){
        iframeValue = this.frame.contentWindow.document.body.find
      }else{
        iframeValue = this.frame.contentWindow.document.body.innerHTML;
      }
    
      this.iframeValue = iframeValue;
      if(href.endsWith('.md')){
        iframeValue = `<markdown>${iframeValue}</markdown>`;
      }else{
        iframeValue = `<div>${iframeValue}</div>`
      }
      console.log(iframeValue);
      window.Vue.component('dynamic',{
        template: iframeValue
      })
      this.rendered = false;
      setTimeout(()=>{
        this.rendered = true;
      },0)     
      
    }
  }
}
</script>

<style>
.iframe-wrap{
  width:0;
  height:0;
  overflow:hidden; 
}

  
</style>
