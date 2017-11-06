/*根据数据动态改变 二维码*/
<template>
  <div class="temp" :style="canvasStyle">
    <canvas ref="canvas" style="background-color:#ffffff;width:100%;height:100%;" :width="width" :height="height">

    </canvas>
  </div>
</template>

<script>
import QRCode from './qrcode.lib'


 function   draw(ctx,qrcode,width,height,foreground,background){
  var tileW	= width  / qrcode.getModuleCount();
  var tileH	= height / qrcode.getModuleCount();
  // draw in the canvas
  for( var row = 0; row < qrcode.getModuleCount(); row++ ){
    for( var col = 0; col < qrcode.getModuleCount(); col++ ){
        ctx.fillStyle = qrcode.isDark(row, col) ? foreground : background;
        var w = (Math.ceil((col+1)*tileW) - Math.floor(col*tileW));
        var h = (Math.ceil((row+1)*tileW) - Math.floor(row*tileW));
        ctx.fillRect(Math.round(col*tileW),Math.round(row*tileH), w, h); 
    }	
  }
}

export default {
    name: 'qrcode',
    props:{
        width:{
            type:Number,
            default(){
                return 100
            }
        },
        height:{
            type:Number,
            default(){
                return 100
            }
        },
        dataConfig:{
            type:Object,
            default(){
                return {
                  foreground:'#000000',
                  background:'#ffffff',
                  typeNumber : -1,
                  errorCorrectionLevel : 1
                }
            }
        },
        data:{
            type:String,
            default(){
                return 'https://vuefe.cn/v2/api/#ref';
            }  
        },
        css:{
            type:Object,
            default(){
                return {
                    
                }
            }
        }
            
    },
    data () {
        return {
          msg:'msg',
          getBase64(){
            return this.canvas.canvas.toDataURL("image/png");
          }
        }
    },//end data
    computed:{
        canvasStyle(){            
            let style = {
                width:this.width+'px',
                height:this.height+'px',
                display:'inline-block'
            }
            for(let i in this.css){
                style[i] = this.css[i]
            }
            return style;
        }
    },//end computed
    methods:{
        qrCodeUpdate(){           
            this.qrcode = new QRCode(-1,2);
            this.qrcode.addData(this.data);
            this.qrcode.make();
            draw(this.canvas,this.qrcode,this.width,this.height,this.dataConfig.foreground,this.dataConfig.background);
            this.$nextTick(()=>{
              this.$emit('rendered',this);
            })
            
        }
    },//end methods
    created(){        
        this.qrcode = new QRCode(this.typeNumber,this.errorCorrectionLevel); 
    },
    mounted(){
        this.canvas = this.$refs.canvas.getContext('2d');
        this.qrCodeUpdate();        
    },
    watch:{
        data(nVal,oVal){
            this.qrcode = new QRCode(-1,2);
            this.qrcode.addData(this.data);
            this.qrcode.make();
            draw(this.canvas,this.qrcode,this.width,this.height,this.dataConfig.foreground,this.dataConfig.background);
        },
        canvasStyle(nVal,oVal){
            this.$nextTick(()=>{
                this.qrCodeUpdate();
            })
        }
    }
}
</script>

<style>

</style>