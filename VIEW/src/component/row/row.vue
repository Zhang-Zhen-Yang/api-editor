<template>
  <div class="row" :style="css">
    <slot name="default"></slot>
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
    }
  },
  name: 'row',
  data () {
    return {
    }
  },
  computed:{
  },
  methods:{
    
  }
}
</script>
<style scope>
  .row:after{
    content:'';
    display:table;
    clear:both;
  }

</style>
