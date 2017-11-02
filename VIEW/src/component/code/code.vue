<template>
  <pre>
    <code class="v-code" ref="code">

    </code>
  </pre>
</template>

<script>
const hljs = require('highlight.js');
export default {
  props:{
    templateId:{
      type:String,
      default:'',
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
    
  },
  mounted(){
    const ERR_HEAD =
    "\n******************* Convert Error *******************\n";
    const ERR_TAIL =
    "\n*****************************************************\n";
    let id = document.getElementById(this.templateId);
    let hljsCode = '';
    console.log(id);
    if(id){
      try{
        hljsCode = hljs.highlightAuto(id.innerHTML).value
        this.$refs.code.innerHTML = hljsCode;
      }catch(errMsg){
        this.$refs.code.innerHTML = `${hljsCode}${ERR_HEAD}${errMsg}${ERR_TAIL}`;
      }
      
    }
    //console.log('ddddddddddddddd',this.$refs.code.innerHTML);
  }
}
</script>
<style>
  .v-code:{

  }
</style>
