<template>
  <div id="app">
    <div class="mdl-grid">
      <preview></preview>

    </div>

  </div>
</template>

<script>
  import Preview from './components/preview'
  import 'material-design-lite/material'

  export default {
    components: {
      Preview
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
