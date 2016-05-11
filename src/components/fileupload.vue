<style lang="sass?outputStyle=expanded">
  @import '../assets/sass/_upload.scss';
</style>
<template>
  <div class="mdl-textfield  upload-field">
    <div class="mdl-textfield mdl-js-textfield upload-field">
      <div v-show=" type === 'cover'">
        <label class="mdl-textfield__label">封面：(大图片建议尺寸：900像素*500像素 格式：png、gif、jpg）</label>
        <label
          class="upload-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">&#xE864;</i>
          <input @change="uploadCover" type="file" id="{{type}}-file_cover_img" class="none">
        </label>
        <div id="cover-preview" class="img-preivew">
          <div v-show="false">
            <mdl-progress :progress="80"></mdl-progress>
          </div>
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
  import {
    MdlTooltip, MdlButton, MdlTextfield, MdlProgress
  }
    from 'vue-mdl'
  export default {
    data() {
      return {
        coverImage: '',
        coverUrl: '',
        headers: ''
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
      },
      action: {
        type: String,
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
          this._getUpToken()
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
      },
      _getUpToken: function () {
        var xhr = new XMLHttpRequest()
        if (this.action) {
          xhr.open('GET', this.action, false)
          xhr.setRequestHeader("If-Modified-Since", "0")
          xhr.send()
          if (xhr.status === 200) {
            let res = this._parseJSON(xhr.responseText)
            console.log(res)
          }
        }
      },
      _onProgress: function (e) {
        // this is an internal call in XHR to update the progress
        e.percent = (e.loaded / e.total) * 100;
        this.$dispatch('onFileProgress', e);
      },
      _handleUpload: function (file) {
        this.$dispatch('beforeFileUpload', file);
        var form = new FormData();
        var xhr = new XMLHttpRequest();
        try {
          form.append('Content-Type', file.type || 'application/octet-stream');
          // our request will have the file in the ['file'] key
          form.append('file', file);
        } catch (err) {
          this.$dispatch('onFileError', file, err);
          return;
        }
        return new Promise(function (resolve, reject) {
          xhr.upload.addEventListener('progress', this._onProgress, false);
          xhr.onreadystatechange = function () {
            if (xhr.readyState < 4) {
              return;
            }
            if (xhr.status < 400) {
              var res = JSON.parse(xhr.responseText);
              this.$dispatch('onFileUpload', file, res);
              resolve(file);
            } else {
              var err = JSON.parse(xhr.responseText);
              err.status = xhr.status;
              err.statusText = xhr.statusText;
              this.$dispatch('onFileError', file, err);
              reject(err);
            }
          }.bind(this)
          xhr.onerror = function () {
            var err = JSON.parse(xhr.responseText);
            err.status = xhr.status;
            err.statusText = xhr.statusText;
            this.$dispatch('onFileError', file, err);
            reject(err);
          }.bind(this);
          xhr.open('POST', this.action, true);
          if (this.headers) {
            for (var header in this.headers) {
              xhr.setRequestHeader(header, this.headers[header])
            }
          }
          this.$dispatch('afterFileUpload', file)
        }.bind(this))
      }
    }
  }

</script>
