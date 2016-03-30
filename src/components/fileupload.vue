<template>
  <div class="mdl-textfield  upload-field">
    <div class="mdl-textfield mdl-js-textfield upload-field">
      <div v-show="type === 'cover'">
        <label class="mdl-textfield__label">封面：(大图片建议尺寸：900像素*500像素 格式：png、gif、jpg）</label>
        <label
          class="upload-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">&#xE864;</i>
          <input @change="uploadCover" type="file" id="{{type}}-file_cover_img" class="none">
        </label>
        <div id="cover-preview" class="img-preivew">
          <mdl-progress :progress="progress"></mdl-progress>
        </div>
      </div>
      <div v-show="type === 'list'">
        <label class="mdl-textfield__label">封面：（小图片建议尺寸：200像素 * 200像素 格式：png、gif、jpg）</label>
        <label
          class="upload-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">&#xE864;</i>
          <input @change="uploadListCover" type="file" id="{{type}}-file_cover_img" class="none">
        </label>
        <div id="{{key}}-list-preview" class="img-preivew"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {MdlTooltip, MdlButton, MdlTextfield, MdlProgress} from 'vue-mdl'
  export default{
    data () {
      return {
        coverImage: '',
        coverUrl: ''
      }
    },
    props: {
      type: {
        type: String,
        required: true
      },
      key: {
        type: Number,
        required: true
      }
    },
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield,
      MdlProgress
    },
    methods: {
      uploadCover: function (e) {
        let files = e.target.files || e.dataTransfer.files
        let _self = this
        this._createImage(files[0], function (url) {
          _self.coverUrl = url
          _self.$dispatch('getCover', _self.coverUrl, _self.key)
        })
        const preview = document.getElementById('cover-preview')
        preview.innerHTML = ''
        if (this.coverImage) {
          preview.appendChild(this.coverImage)
        }
      },
      uploadListCover: function (e) {
        let files = e.target.files || e.dataTransfer.files
        let _self = this
        this._createImage(files[0], function (url) {
          _self.coverUrl = url
          _self.$dispatch('getCover', _self.coverUrl, _self.key)
        })
        const preview = document.getElementById(_self.key + '-list-preview')
        preview.innerHTML = ''
        console.log(this.coverImage)
        if (this.coverImage) {
          preview.appendChild(this.coverImage)
        }
      },
      _createImage: function (file, callback) {
        let image = new window.Image()
        const fileReader = new window.FileReader()
        fileReader.onloadend = function (e) {
          callback(e.target.result)
          image.src = e.target.result
        }
        fileReader.readAsDataURL(file)
        this.coverImage = image
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
  @import '../assets/sass/_upload.scss';
</style>


