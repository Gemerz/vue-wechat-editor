<template>
  <div id="app">


    <div class="mdl-grid">
      <preview class="mdl-cell mdl-cell--5-col"></preview>
      <div class="mdl-cell mdl-cell--7-col">
        <forms></forms>
      </div>


    </div>

  </div>
</template>

<script>
  import Preview from './components/preview'
  import Forms from './components/forms'
  import 'material-design-lite/material'

  export default {
    components: {
      Preview,
      Forms
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
  @import 'assets/sass/_editor.scss';
  @import '~material-design-lite/material.css';
  #app{
    max-width: 980px;
    margin: 20px auto;
    display: block;
  }
</style>
