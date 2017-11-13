<template>
  <div class="code-wrap" :style="css">
    <div class="copy-icon-wrap" v-if="showCopyIcon">
      <clipboard :target="templateid" @success="copysuccess">
        <div class="copy-icon" title="复制代码">
        </div>
      </clipboard>
    </div>    
    <pre><code class="v-code" ref="code"></code></pre>
    
  </div>
  
</template>

<script>
import clipboard from '../clipboard/clipboard.vue'
const hljs = require('highlight.js');
export default {
  components:{
    clipboard,
  },
  props:{
    templateid:{
      type:String,
      default:'',
    },
    showCopyIcon:{
      type:Boolean,
      default:true,
    },
    css:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  name: 'v-code',
  data () {
    return {
    }
  },
  render(createElement){
    return createElement('h1',['apple']);
  },
  computed:{
  },
  methods:{
    copysuccess(){
      try{
        window.app.show('Code Copied',1500);
      }catch(e){
        console.log(e);
      }
    }
  },
  created(){
  },
  mounted(){
    const ERR_HEAD =
    "\n******************* Convert Error *******************\n";
    const ERR_TAIL =
    "\n*****************************************************\n";
    console.log('templateid',this.templateid);
    let id = document.getElementById(this.templateid);
    let hljsCode = '';
    console.log('id',id);
    if(id){
      try{
        hljsCode = hljs.highlightAuto(id.innerHTML.replace(/\\{\\{/mig,'{{').replace(/\\}\\}/mig,'}}')).value
        console.log('hljscode',hljsCode);
        this.$refs.code.innerHTML = hljsCode;
        this.$nextTick(()=>{
          console.log('this.$refs.code.innerHTML',this.$refs.code.innerHTML);
        })
        
      }catch(errMsg){
        this.$refs.code.innerHTML = `${hljsCode}${ERR_HEAD}${errMsg}${ERR_TAIL}`;
      }
      
    }

  }
}
</script>
<style>
  .code-wrap pre{
    margin:0;
    padding-bottom:10px;
    border-radius:0;
  }
  .code-wrap{
    position:relative;
    display:inline-block;
    vertical-align:top;
    width:100%;
  }
  .copy-icon-wrap{
    display:inline-block;
    position:absolute;
    right:15px;
    top:15px;
  }
  .copy-icon{
    position:relative;
    width:15px;
    height:18px;    
    background-color:#efefef;
    border:2px solid;
    border-radius:2px;
    color:#b0bec5;
    cursor:pointer;
  }
  .copy-icon:hover{
    color:#6e6e6e;
  }
  .copy-icon:before{
    content:'';
    display:block;
    position:absolute;
    width:12px;
    height:15px;
    border-left:2px solid;
    border-top:2px solid;
    left:-6px;
    top:-6px;
    border-radius:2px 0;
  }
</style>
