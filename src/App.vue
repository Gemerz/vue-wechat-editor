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
  @import '~material-design-lite/material.css';
  @import 'assets/sass/_editor.scss';
  @import 'assets/sass/_mdl.scss';

  #app{
    max-width: 980px;
    margin: 20px auto;
    display: block;
  }
</style>
