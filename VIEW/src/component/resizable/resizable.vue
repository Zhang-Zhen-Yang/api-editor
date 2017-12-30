<template>
  <div class="v-resizable" :style="[css,{width:currentWidth==null?(css.width||'auto'):(currentWidth+'px'),height:currentHeight==null?(css.height||'auto'):(currentHeight+'px')}]" ref="self">
    <slot name="default"></slot>
    <div class="resize-handle handle-s" v-if="handle.indexOf('s')>-1" @mousedown.stop="resizeStart('s',$event)" data-d="s" :data-cancel="cancel"></div>
    <div class="resize-handle handle-n" v-if="handle.indexOf('n')>-1" @mousedown="resizeStart('n',$event)" data-d="n" :data-cancel="cancel"></div>
    <div class="resize-handle handle-e" v-if="handle.indexOf('e')>-1" @mousedown.stop="resizeStart('e',$event)" data-d="e" :data-cancel="cancel"></div>
    <div class="resize-handle handle-w" v-if="handle.indexOf('w')>-1" @mousedown="resizeStart('w',$event)" data-d="w" :data-cancel="cancel"></div>
    <div class="resize-handle handle-se" v-if="handle.indexOf('se')>-1" @mousedown.stop="resizeStart('se',$event)" data-d="se" :data-cancel="cancel"></div>
    <div class="resize-handle handle-sw" v-if="handle.indexOf('sw')>-1" @mousedown="resizeStart('sw',$event)" data-d="sw" :data-cancel="cancel" ></div>
    <div class="resize-handle handle-ne" v-if="handle.indexOf('ne')>-1" @mousedown="resizeStart('ne',$event)" data-d="ne" :data-cancel="cancel"></div>
    <div class="resize-handle handle-nw" v-if="handle.indexOf('nw')>-1" @mousedown="resizeStart('nw',$event)" data-d="nw" :data-cancel="cancel" :data-cancelx="cancelX" :data-cancely="cancelY"></div>
  </div>
</template>

<script>
export default {
  name: 'v-resizable',
  props:{
    // 样式
    css:{
      type:Object,
      default(){
        return {};
      }
    },

    //显示的调整块
    handle:{
      type:Array,
      default(){
        return ['n','s','e','w','ne','nw','se','sw'];
      }
    },

    // 是否保持纵横比
    aspectRatio:{
      type:Boolean,
      default:true
    },
    intercept:{
      type:Function,
      default:function(w,h,d){
        return {w:w,h:h};
        /*var position = {x:x,y:y};
        if(x<0){position.x = 0;};
        if(y<0){position.y = 0;};
        return position;*/
      }
    }
  },
  data () {
    return {
      msg: 'resizable组件',
      type:null,
      started:false,
      startX:0,
      startY:0,
      initWidth:0,
      initHeight:0,
      currentWidth:null,
      currentHeight:null,
      cancel:false,
      cancelX:false,
      cancelY:false,      
      ratio:1,
      resize(e){
        if(!this.started){ return; }
        
        let x = e.pageX;
        let y = e.pageY;
        let shouldWidth,shouldHeight;
        let heightChange,widthChange,height,width;
        switch(this.type){

          // 南
          case 's':
            height = this.initHeight + y - this.startY;
            if(height>0){
              this.currentHeight = height
            }
          break;

          //东
          case 'e':
            width = this.initWidth + x - this.startX;
            if(width>0){
              this.currentWidth = width;
            }
          break;

          // 北
          case 'n':
            heightChange = -(y - this.startY);
            let shouledHeight = this.initHeight + heightChange;
            if(shouledHeight > 0 ){
              this.cancel = false;
              let size = this.intercept(this.currentWidth,shouledHeight,'n');
              this.currentHeight = size.h;
            }else{
              this.cancel = true;
            }
          break;

          //西
          case 'w':
           widthChange = -(x - this.startX);
           shouldWidth = this.initWidth + widthChange;
            if(shouldWidth > 0 ){
              this.cancel = false;
              let size = this.intercept(shouldWidth,this.currentHeight,'w');
              this.currentWidth = size.w;
            }else{
              this.cancel = true;
            }
          break;

          //东南
          case 'se':
            shouldWidth = this.initWidth + x - this.startX;
            shouldHeight = this.initHeight + y - this.startY;
            // 如果保持长宽比
            if(this.aspectRatio){
              let currentRatio = shouldWidth/shouldHeight;
              if(currentRatio>this.ratio){
                this.currentHeight = shouldHeight;
                this.currentWidth = this.ratio*shouldHeight;
              }else{
                this.currentHeight = shouldWidth/this.ratio;
                this.currentWidth = shouldWidth;
              }
            }else{
              this.currentHeight = shouldHeight;
              this.currentWidth = shouldWidth;
            }
          break;

          //东北
          case 'ne':
            heightChange = -(y - this.startY);
            widthChange =   x - this.startX;
            if(this.initHeight + heightChange > 0 ){
              this.cancel = false;
              this.currentHeight = this.initHeight + heightChange;
            }else{
              this.cancel = true;
            }
            this.currentWidth = this.initWidth + widthChange;
          break;

          //西南
          case 'sw':
            widthChange = -(x - this.startX);
            if(this.initWidth + widthChange > 0 ){
              this.cancel = false;
              this.currentWidth = this.initWidth + widthChange;
            }else{
              this.cancel = true;
            }
            this.currentHeight = this.initHeight + y - this.startY;
          break;

          //西北
          case 'nw':
            widthChange = -(x - this.startX);
            if(this.initWidth + widthChange > 0 ){
              this.cancelX = false;
              this.currentWidth = this.initWidth + widthChange;
            }else{
              this.cancelX = true;
            }
            heightChange = -(y - this.startY);
            if(this.initHeight + heightChange > 0 ){
              this.cancelY = false;
              this.currentHeight = this.initHeight + heightChange;
            }else{
              this.cancelY = true;
            }
          break;
        }
        this.$emit('resizeMove',{w:this.currentWidth,h:this.currentHeight});
      },
      stop(e){
        this.started = false;
        this.$emit('resizeStop');
      }
    }
  },
  computed:{
  },
  methods:{
    //resize开始
    resizeStart(type,e){
      this.type = type;
      this.startX = e.pageX;
      this.startY = e.pageY;
      this.started = true;
      this.initWidth = this.self.clientWidth;
      this.initHeight = this.self.clientHeight;
      this.ratio = this.initWidth/this.initHeight;
      // alert([this.initWidth,this.initHeight]);
      this.$emit('resizeStart');
      this.cancel = false;
    }
  },
  created(){
    
    let _this = this;
    document.addEventListener('mousemove',(e)=>{_this.resize(e)},false);
    document.addEventListener('mouseup',(e)=>{_this.stop(e)},false);
    document.addEventListener('dragover',(e)=>{
      // console.log('dragover');
      _this.resize(e);
    },false);
    document.addEventListener('dragend',(e)=>{
      _this.stop(e);
    },false);
  },
  mounted(){
    this.self = this.$refs.self;
  }
}
</script>

<style>
  .v-resizable{
    display:inline-block;
    position:absolute;
    -webkit-user-select:none;
    user-select:none;
  }
  .resize-handle{
    width:10px;
    height:10px;
    background-color:white;
    border:1px solid gray;
    position:absolute;
  }
  .handle-s{
    bottom:-5px;
    left:50%;
    transform:translate(-50%,0);
    cursor:s-resize;
  }
  .handle-n{
    top:-5px;
    left:50%;
    transform:translate(-50%,0);
    cursor:n-resize;
  }
  .handle-e{
    right:-5px;
    top:50%;
    transform:translate(0,-50%);
    cursor:e-resize;
  }
  .handle-w{
    left:-5px;
    top:50%;
    transform:translate(0,-50%);
    cursor:w-resize;
  }
  .handle-se{
    right:-5px;
    bottom:-5px;
    cursor:se-resize;
  }
  .handle-sw{
    bottom:-5px;
    left:-5px;
    cursor:sw-resize;
  }
  .handle-ne{
    top:-5px;
    right:-5px;
    cursor:ne-resize;
  }
  .handle-nw{
    top:-5px;
    left:-5px;
    cursor:nw-resize;
  }
</style>
