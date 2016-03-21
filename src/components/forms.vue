<template>
  <div class="forms">
    <form>
      <mdl-textfield floating-label="标题："></mdl-textfield>
      <mdl-textfield floating-label="作者：（选填）"></mdl-textfield>


    </form>
  </div>

</template>

<script>
  import {MdlTooltip, MdlButton, MdlTextfield} from 'vue-mdl'
  export default{
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
  .forms{
    padding: 15px;
  }
</style>

