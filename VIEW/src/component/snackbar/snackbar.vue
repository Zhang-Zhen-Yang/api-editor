<template>
  <transition name="fade">
  <div class="v-snackbar" v-if="isShow">
    {{ text }}
    <button @click="isShow=false">
    OK
    </button>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'v-snackbar',
  data () {
    return {
      msg: 'snackbar',
      isShow:false,
      text:'',
      show(text,timeout){
        if(this.timeout){
          clearTimeout(this.timeout);
        }
        this.isShow = true;
        this.text = text;
        this.timeout = setTimeout(()=>{
          this.isShow = false;
        },timeout)
      }
    }
  },
  computed:{
    
  },
  methods:{
    
  },
  mounted(){
  }
}
</script>

<style>
  .v-snackbar{
    position:fixed;
    display:inline-block;
    color:white;
    padding:8px 10px 8px 20px;
    font-size:16px;
    bottom:0;
    left:50%;
    -webkit-transform:translate(-50%,0);
    transform:translate(-50%,0);
    background-color:#2C3E50;
  }
  .v-snackbar button{
    margin-left:50px;
    border:none;
    outline:none;
    background-color:transparent;
    cursor:pointer;
    font-size:16px;
    padding:5px 10px;
    color:#ffeb3b;
    border-radius:3px;
  }
  .v-snackbar button:hover{
    background-color:rgba(255,255,255,0.1)
  }
  .fade-enter-active, .fade-leave-active {
    transition: bottom .3s ease-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
    bottom: -44px
  }
</style>
