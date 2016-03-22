<template>

</template>

<script>
  import {MdlTooltip, MdlButton, MdlTextfield} from 'vue-mdl'
  import store from 'store'
  export default{
    data () {
      return {
        previews: store.get('previewST')
      }
    },
    props: ['editedPreview'],
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield
    },
    methods: {}
  }
</script>


