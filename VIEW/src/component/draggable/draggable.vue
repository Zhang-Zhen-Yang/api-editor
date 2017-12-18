<template>
  <div class="v-draggable" 
    @mousedown="dragStart($event)"
    ref="self"
    :style="[css,{left:this.currentX+'px',top:this.currentY+'px'}]"><slot name="default"></slot></div>
</template>

<script>
export default {
  name: 'v-draggable',
  props:{
    x:{
      type:Number,
      default:0
    },
    y:{
      type:Number,
      default:0
    },
    css:{
      type:Object,
      default(){
        return {};
      }
    },
    intercept:{
      type:Function,
      default:function(x,y){
        return {x:x,y:y};
        /*var position = {x:x,y:y};
        if(x<0){position.x = 0;};
        if(y<0){position.y = 0;};
        return position;*/
      }
    }
  },
  data () {
    return {
      msg: '拖动组件',
      started:false,
      startX:0,
      startY:0,
      initX:0,
      initY:0,
      currentX:0,
      currentY:0,
      move(e){
        if(!this.started){ return; }
        let movedX = e.pageX - this.startX,
          movedY = e.pageY - this.startY;
          let {x,y} = this.intercept(this.initX + movedX, this.initY + movedY);
          this.currentX = x;
          this.currentY = y;
          this.$emit('dragMove',{x,y});
      },
      stop(){
        this.started = false;
        this.initX = this.currentX;
        this.initY = this.currentY;
        this.$emit('dragStop');
      }
    }
  },
  computed:{
  },
  methods:{
    // 开始拖动
    dragStart(e){
      //console.log('dragStart');
      this.started = true;
      this.startX = e.pageX;
      this.startY = e.pageY;
      this.$emit('dragStart');
    },    
  },
  created(){
    let x = this.x;
    let y = this.y;
    this.currentX = x;
    this.currentY = y;
    this.initX = x;
    this.initY = y;
    this.self = this.$refs.self;
    let _this = this;
    document.addEventListener('mousemove',(e)=>{_this.move(e)},false);
    document.addEventListener('mouseup',(e)=>{_this.stop(e)},false);
    document.addEventListener('dragover',(e)=>{
      console.log('dragover');
      _this.move(e);
    },false);
    document.addEventListener('dragend',(e)=>{
      _this.stop(e);
    },false);
    document.addEventListener('drop',(e)=>{
      console.log('drop');
    },false);
  },
  destroyed(){

  }
}
</script>
<style>
  .v-draggable{
    display:inline-block;
    position:absolute;
    -webkit-user-select:none;
    user-select:none;
    cursor:move;
  }
  .v-draggable{
    cursor:move;
  }
</style>
