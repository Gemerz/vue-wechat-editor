<template>
  <div class="forms" v-for="preview in previews | orderBy 'key'">
    <form>
      <mdl-textfield floating-label="标题："></mdl-textfield>
      <mdl-textfield floating-label="作者：（选填）"></mdl-textfield>
    </form>
  </div>

</template>

<script>
  import {MdlTooltip, MdlButton, MdlTextfield} from 'vue-mdl'
  import store from 'store'
  export default{
    data () {
      return {
        previews: store.get('previewST'),
        newPreview: '',
        editedPreview: null,
        tempKey: 1
      }
    },
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
  .mdl-textfield {
    width: 100%;
  }

  .forms {
    padding: 15px;
  }
</style>

