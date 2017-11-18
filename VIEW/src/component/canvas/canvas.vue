<template>
  <div class="v-canvas">
  <div ref="contents"><slot name="default"></slot></div>
  <canvas ref="canvas" :width="width" :height="height" :style="css">
  </canvas>
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
    css:{
      type:[Object,String],
      default(){
        return {};
      }
    }
  },
  data () {
    return {
      msg: 'canvas',
      contents:[],
      getBase64(){
        try{
          return (this.ctx.canvas.toDataURL());
        }catch(e){
          return '获取失败'
        }
      },
      render(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        if(Array.isArray(this.contents)){
          this.contents.forEach((item)=>{
            // console.log(item.type,JSON.stringify(item));
            if(item.type=='image'){
              if(!item.renderIng){
                console.log(item.src);
                let img = new Image;
                img.src=item.src;
                item.renderIng = true;
                img.onload = ()=>{
                  item.imgObj = img;
                  this.render();
                }
                img.onerror=()=>{
                  item.imgObjNULL = true;
                  item.imgObj = null;
                  console.error(item.src+' load error');
                }              
                return;
              }
            }
            render[item.type](this.ctx, item);
          })


          // console.log('noIMG',this.contents.filter((item)=>{console.log('item----------------',item);return item.type=='image'&&(!item.imgObj&&!item.imgObjNULL)}).length);
          if(this.contents.filter((item)=>{return item.type=='image'&&(!item.imgObj||item.imgObjNULL===true)}).length==0){
            this.$emit('rendered',this);
          }
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
