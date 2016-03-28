<template>

  <div class="mdl-textfield  upload-field">
    <div class="mdl-textfield mdl-js-textfield upload-field">
      <div v-show="type === 'cover'">
        <label class="mdl-textfield__label">封面：(大图片建议尺寸：900像素*500像素 格式：png、gif、jpg）</label>
        <label
          class="upload-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">&#xE864;</i>
          <input @change="uploadCover" type="file" id="file_cover_img" class="none">
        </label>
        <div id="cover-preview"></div>
      </div>
      <div v-show="type === 'list'">
        <label class="mdl-textfield__label">封面：（小图片建议尺寸：200像素 * 200像素 格式：png、gif、jpg）</label>
        <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">&#xE864;</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {MdlTooltip, MdlButton, MdlTextfield} from 'vue-mdl'
  export default{
    props: {
      type: {
        type: String,
        required: true
      },
      cover: {
        type: String
      }
    },
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield
    },
    methods: {
      uploadCover: function (e) {
        let files = e.target.files || e.dataTransfer.files
        this._createImage(files[0])
        const preview = document.getElementById('cover-preview')
        if (this.cover) {
          preview.appendChild(this.cover)
        }
      },
      _createImage: function (file) {
        let image = new window.Image()
        const fileReader = new window.FileReader()
        fileReader.onload = function (e) {
          image.src = e.target.result
        }
        fileReader.readAsDataURL(file)
        this.cover = image
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
  @import '../assets/sass/_upload.scss';
</style>


