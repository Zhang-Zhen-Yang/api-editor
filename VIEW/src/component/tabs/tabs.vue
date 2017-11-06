<template>
  <div class="v-tabs">
    <slot name="default" ref="slot"></slot>
  </div>
</template>

<script>
export default {
  name: 'v-tabs',
  data () {
    return {
      
    }
  },
  computed:{
  },
  methods:{
    
  },
  mounted(){
    console.log('slot',this.$refs);
  }
}
</script>

<style>
</style>
