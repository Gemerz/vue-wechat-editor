<template>

</template>

<script>
  import {MdlTooltip, MdlButton, MdlTextfield} from 'vue-mdl'
  export default{
    props: {
      previews: {
        type: Array,
        required: true
      },
      currentIndex: {
        type: Number,
        required: true
      }
    },
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield
    },
    methods: {}
  }
</script>


