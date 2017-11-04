<template>
  <div class="v-aspect" :style="sty">
    aspect
  </div>
</template>

<script>
export default {
  name: 'v-aspect',
  props:{
    ratio:{
      type:Number,
      default:null
    },
    css:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  data () {
    return {
      msg: '动态组件'
    }
  },
  computed:{
    sty(){
      let style = {
        
      }
      if(this.ratio){
        style.paddingBottom = this.ratio*100+'%';
      }
      return style
    }
  },
  methods:{
    
  }
}
</script>
<style>
.v-aspect{
  background-color:red;
  /*position:relative;*/
  padding-top: 0px;
     /*// 16/9 = 0.5625;*/
  height:0;
  border: 1px solid red;
}

</style>
