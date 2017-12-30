<template>
  <div class="v-drop" @drop="drop" @dragover="dragover($event)" :style="css">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'v-drop',
  props:{
    css:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  data () {
    return {
      
    }
  },
  computed:{

  },
  methods:{
    drop(e){
      e.preventDefault();
      this.$emit('drop',e);
    },
    dragover(e){
      e.preventDefault();
      this.$emit('dragover');
    }
  }
}
</script>

<style scoped>
  .v-drop{
  }
</style>
