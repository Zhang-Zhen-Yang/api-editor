<template>
  <div 
    class="v-resize" 
    :style="[css,dragCss]" 
    @mousemove="resizeMove($event)" 
    @mouseup="resizeEnd($event)" 
    @mouseleave="resizeEnd($event)" 
    ref="resizeWrap">
    <div class="v-resize-first" :style="{width:first}">
      <slot name="first"></slot>
    </div><div class="v-resize-last" :style="{width:last}">
      <slot name="last"></slot>
    </div>
    <div class="v-resize-trigger trigger-last" :style="{left:triggerLeft}" @mousedown="resizeStart($event)"></div>
  </div>
</template>

<script>
export default {
  props:{
    css:{
      type:Object,
      default(){
        return {};
      }
    },
    ratio:{
      type:Array,
      default(){
        return [0.5,null]
      }
    },
  },
  name: 'v-resize',
  data () {
    return {
      msg: 'v-resize',
      first:'50%',
      last:'50%',
      triggerLeft:'0px',
      resizeType:'ratio',
      resizeStartMsg:{
        starting:false,
        pageX:0,
        resizeStartRatioStart:null,
        resizeStartRatioLast:null,
      },
      
      setRatio(){
        if(this.ratio[0]){
          if(typeof this.ratio[0] == 'number'){
            this.resizeType='ratio',
            this.first = this.ratio[0]*100+'%';
            this.last = (1 - this.ratio[0])*100+'%';
            this.triggerLeft=`calc( ${this.first} - 5px)`;
          }else{
            this.resizeType='fixedStart',
            this.first = this.ratio[0];
            this.last = `calc(100% - ${this.ratio[0]})`;
            this.triggerLeft=(parseFloat(this.first) - 5)+'px'
          }
        }else{
          if(typeof this.ratio[1] == 'number'){
            this.resizeType='ratio',
            this.last = this.ratio[1]*100+'%';
            this.first = (1 - this.ratio[1])*100+'%';
            this.triggerLeft=`calc( ${this.first} - 5px)`;
          }else{
            this.resizeType='fixedEnd',
            this.last = this.ratio[1];
            this.first = `calc(100% - ${this.ratio[1]})`;
            this.triggerLeft=`calc( 100% - ${this.ratio[1]} - 5px)`;
          }
        }
      }
    }
  },
  computed:{
    nativeRatio(){

    },
    dragCss(){
      return this.resizeStartMsg.starting?{'user-select':'none'}:{};      
    },
  },
  methods:{
    resizeStart(e){
      console.debug(e);
      let resizeStartRatioStart = parseFloat(this.first);
      let resizeEndRatioLast = parseFloat(this.last);
      this.resizeStartMsg.starting = true;
      this.resizeStartMsg.pageX = e.pageX;
      this.resizeStartMsg.resizeStartRatioStart = resizeStartRatioStart;
      this.resizeStartMsg.resizeStartRatioLast = resizeEndRatioLast;
    },
    resizeMove(e){
      if(this.resizeStartMsg.starting){
        let distance = e.pageX - this.resizeStartMsg.pageX;
        if(this.resizeType == 'fixedStart'){
          this.first = distance + this.resizeStartMsg.resizeStartRatioStart+'px';
          this.last = `calc( 100% - ${distance + this.resizeStartMsg.resizeStartRatioStart}px )`;
          this.triggerLeft = distance + this.resizeStartMsg.resizeStartRatioStart-5+'px';
        }else if(this.resizeType == 'fixedEnd'){
          this.last = -distance + this.resizeStartMsg.resizeStartRatioLast+'px';
          this.first = `calc( 100% - ${-distance + this.resizeStartMsg.resizeStartRatioLast}px )`;
          this.triggerLeft = `calc( 100% - ${-distance + this.resizeStartMsg.resizeStartRatioLast + 5}px )`;
        }else if(this.resizeType == 'ratio'){
          let distancePre =  (distance/this.$refs.resizeWrap.clientWidth)*100;
          this.first = this.resizeStartMsg.resizeStartRatioStart + distancePre + '%';
          this.last = this.resizeStartMsg.resizeStartRatioLast - distancePre + '%';
          this.triggerLeft = `calc( ${this.first} - 5px )`;
          // console.log(this.$refs.resizeWrap.clientWidth);
        }
        // console.log(distance);
      }
    },
    resizeEnd(e){
      this.resizeStartMsg.starting = false;
    }
  },
  created(){
    this.setRatio();
  }
}
</script>
<style>
  .v-resize{
    position:relative;
  }
  .v-resize-first,.v-resize-last{
    position:relative;
    display:inline-block;
    min-height:100%;
    vertical-align:top;
    margin:0;
    padding:0;
  }
  .v-resize-trigger{
    position:absolute;
    width:10px;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    top:0;
  }
  .v-resize-trigger:hover{
    cursor:e-resize;
  }
</style>
