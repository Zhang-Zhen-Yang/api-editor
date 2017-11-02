<template>
  <div class="iframe">
      <div  class="iframe-wrap" :class="{'iframe-wrap-remote':mode=='remote'}">
        <iframe :src="init" name="remote" frameborder="0" ref="frame">
        </iframe>
      </div>
      <div class="iframe-content" v-if="mode=='remote'">
        <dynamic v-if="rendered"></dynamic>
      </div>
      <slot name="default"></slot>
  </div>
</template>

<script>
//import dynamic from '../Dynamic/Dynamic.vue'
export default {
  name: 'remote',
  props:{
    init:{
      type:String,
      default:''
    }
  },
  components:{ },
  data () {
    return {
      src:'iframe2.html',
      msg: 'Welcome',
      iframeValue:'',
      rendered:false,
      mode:'iframe'

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
      /*if(window.location.href.indexOf('file:///')==0){
        alert('local');
        
      }else{*/
        try{
          let href = this.frame.contentWindow.location.href,iframeValue;
          if(href.endsWith('.md')){
            iframeValue = this.frame.contentWindow.document.body.firstChild.innerHTML.replace(/&lt;/mig,'<').replace(/&gt;/mig,'>');
          }else if(href.indexOf('http')==0&&window.location.href.indexOf('file:///')==0){
            this.mode ='iframe';
            return;
          }else{
            iframeValue = this.frame.contentWindow.document.body.innerHTML;
          }
          
          this.iframeValue = iframeValue;
          if(href.endsWith('.md')){
            //console.log('md',iframeValue);
            iframeValue = `<markdown>${iframeValue}</markdown>`;
          }else{
            iframeValue = `<div>${iframeValue}</div>`
          }
          //console.log(iframeValue);
          window.Vue.component('dynamic',{
            template: iframeValue
          })
          this.rendered = false;
          this.mode = 'remote';
          setTimeout(()=>{
            this.rendered = true;
          },0)
        }catch(e){
          this.mode ='iframe';
          console.log(e);
        }
      //}
    }
  }
}
</script>

<style>
.iframe-wrap-remote{
  width:0;
  height:0;
  overflow:hidden; 
}

.iframe-wrap iframe{
  position:fixed;
  width:calc(100% - 300px);
  height:100%;
  height:calc(100% - 72px);
}
.iframe-wrap-remote iframe{
  position:static;
}
.iframe .iframe-content{
  max-width:1200px;
  min-width:600px;
  min-height:600px;
}
  
</style>
