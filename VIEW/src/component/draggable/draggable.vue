<template>
  <div class="v-draggable" 
    @mousedown="dragStart($event)"
    data-templatename="draggable"
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
      d:null,
      move(e){
        if(!this.started){ return; }
        let movedX = e.pageX - this.startX,
          movedY = e.pageY - this.startY;
          let {x,y} = this.intercept(this.initX + movedX, this.initY + movedY);
          if(this.d =='default'){
            this.$emit('dragMove',{x,y});
              this.currentX = x;
              this.currentY = y;
          }else if(this.d == 'nw'){
              let cancelX  = this.resizeTarget.getAttribute('data-cancelx');
              let cancelY  = this.resizeTarget.getAttribute('data-cancely');
              if(!cancelX){ this.currentX = x; };
              if(!cancelY){ this.currentY = y; };
          }else{
            let cancel  = this.resizeTarget.getAttribute('data-cancel');
            //console.log(cancel);
            if(cancel){
              return;
            }
            switch(this.d){
              case 'n':
                this.currentY = y;
                break;
              case 'ne':
                this.currentY = y;
                break;
              case 'w':
                this.currentX = x;
                break;
              case 'sw':
                this.currentX = x;
                break;
            }
          }
         
          
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
      // console.log(e);
      this.started = true;
      this.startX = e.pageX;
      this.startY = e.pageY;
      this.$emit('dragStart');
      let d = e.target.getAttribute('data-d');
      this.resizeTarget = e.target;
      this.d = d||'default';
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
      // console.log('dragover');
      _this.move(e);
    },false);
    document.addEventListener('dragend',(e)=>{
      _this.stop(e);
    },false);
    document.addEventListener('drop',(e)=>{
      // console.log('drop');
    },false);
  },
  mounted(){
    // console.log('slot',this.$slots.default[0]);
    //this.$slots.default[0].test();
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
