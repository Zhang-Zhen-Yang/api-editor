<template>
  <div class="v-snackbar">
    动态组件
  </div>
</template>

<script>
export default {
  name: 'v-dynamic',
  data () {
    return {
      msg: '动态组件'
    }
  },
  computed:{
  },
  methods:{
    
  }
}
</script>

<style>
  .v-snackbar{
    position:fixed;
    bottom:0;
  }
</style>
