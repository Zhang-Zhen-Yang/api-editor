<template>
  <div class="v-canvas">
  <div ref="contents"><slot name="default"></slot></div>
  <canvas ref="canvas" :width="width" :height="height">
  </canvas>
    动态组件
  </div>
</template>

<script>
import render from './render'
export default {
  name: 'v-canvas',
  props:{
    width:{
      type:Number,
      default:300
    },
    height:{
      type:Number,
      default:150
    },
  },
  data () {
    return {
      msg: 'canvas',
      contents:[],
      render(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        if(Array.isArray(this.contents)){
          this.contents.forEach((item)=>{
            console.log(item.type);
            if(item.type=='image'){
              if(!item.imgObj){
                console.log(item.src);
                let img = new Image;
                img.src=item.src;
                img.onload = ()=>{
                  alert('load');
                  item.imgObj = img;
                  this.render();
                }
                img.onerror=()=>{
                  alert('load error');
                }
              
                return;
              }
            }
            render[item.type](this.ctx, item);
          })
        }
        // this.ctx.fillText('apple',100,100);
      }
    }
  },
  computed:{
  },
  methods:{
    
  },
  mounted(){
    this.canvas = this.$refs.canvas;
    console.log(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    let arrayContents = this.$refs.contents.innerHTML;
    let fun = new Function(`return ${arrayContents.trim()}`);
    this.contents = fun();
    this.render();
  }
}
</script>
<style>
.v-canvas{
  display:inline-block;
}
.v-canvas div{
  display:none;
}
</style>
