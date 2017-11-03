<template>
  <div class="v-clipboard" :id="sourceID">
    <!-- Trigger -->
    <slot name="default"></slot>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
export default {
  name: 'v-clipboard',
  props:{
    //要复制的文本
    text:{
      type:String,
      default:'',
    },
    target:{
      type:[String,Object],
      default:'',
    }
  },
  data () {
    return {
      sourceID:'sourceID',
    }
  },
  computed:{
  },
  methods:{

  },
  created(){
    this.sourceID = 'clipboard'+(Math.round(new Date().getTime() + (Math.random() + Math.random())*10000));
  },
  mounted(){    
    // console.log('text clipboard',this.text);
    if(this.text){
      this.clipboard = new Clipboard('#'+this.sourceID,{
        text: ()=>{
          return this.text;
        }
      });
    }else{
      if(this.target){
        let targetType = (typeof this.target);
        switch(targetType){
          // 字符串类型
          case 'string':
            let target = document.getElementById(this.target);//||document.getElementsByTagName(this.target);
            if(!target) return;
            if(target.value == undefined){
              this.clipboard = new Clipboard('#'+this.sourceID,{
                text: ()=>{
                  return target.innerHTML;
                }
              });
            }else{
              this.clipboard = new Clipboard('#'+this.sourceID,{
                text: ()=>{
                  return document.getElementById(this.target).value;
                }
              });
            }
            // console.log(target);
            break;
          // 对象类型
          case 'object':
            break;
          default:
            break;
        }
        // console.log('type', targetType);
      }else{
        // console.log('no target');
      }
    }
    if(this.clipboard){
      this.clipboard.on('success', (e) => {
        this.$emit('success',{
          action:e.action,
          text:e.text,
          trigger:e.trigger
        });
        e.clearSelection();
      });
      this.clipboard.on('error', (e) => {
        this.$emit('error',{
          action:e.action,
          trigger:e.trigger
        });
      });
    }

  }// end mounted
}
</script>
<style>
  .v-clipboard{
    display:inline-block;
  }
</style>
