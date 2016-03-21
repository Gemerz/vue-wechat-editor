<template>
  <div id="wechat-editor">
    <div class='wechat-editor-wrap'>
      <div class='wechat-editor'>
        <div class='editor'>
          <div class='editor-item'>
            <div class='cover'>
              <img class='cover-img'/>
              <span class='thumbnail-holder'></span>
              <h4 class='title'></h4>
              <div class='editor-item-edit'>
                <a data-tip data-for='icon-preview'>
                  <mdl-tooltip for="pv-edit-button">浏览</mdl-tooltip>
                  <i id="pv-edit-button" class="material-icons">photo</i>
                </a>
                <a data-tip data-for='icon-edit' href='javascript:void(0)'>
                  <mdl-tooltip for="pv-add-button">新增</mdl-tooltip>
                  <i id="pv-add-button" class="material-icons">add</i>
                </a>
                <a data-tip data-for='icon-delete' href='javascript:void(0)'>
                  <mdl-tooltip for="pv-delete-button">删除</mdl-tooltip>
                  <i id="pv-delete-button" class="material-icons">delete</i>
                </a>

              </div>
            </div>
          </div>
          <div class="editor-add">
            <a class="editor-add-btn" @click="addPreview">
              <mdl-tooltip for="editor-add-button">新增</mdl-tooltip>
              <i id="editor-add-button" class="material-icons">add</i>
            </a>
          </div>
          <!--<div class='editor-item'>-->
          <!--<span class='thumbnail'>-->
          <!--</span>-->
          <!--<div class='editor-item-edit'>-->
          <!--<a data-tip data-for='icon-preview'><i class='fa fa-eye'></i></a>-->
          <!--<a data-tip data-for='icon-edit' href='javascript:void(0)'>-->
          <!--<i class='fa fa-pencil'></i></a>-->
          <!--<a data-tip data-for='icon-delete' href='javascript:void(0)'>-->
          <!--<i class='fa fa-trash'></i></a>-->
          <!--<div class=''>-->

          <!--</div>-->
          <!--<div id='icon-preview' type='warning' effect='solid'>-->
          <!--<span>瀏覽</span>-->
          <!--</div>-->
          <!--<div id='icon-edit' type='warning' effect='solid'>-->
          <!--<span>編輯</span>-->
          <!--</div>-->
          <!--<div id='icon-delete' type='warning' effect='solid'>-->
          <!--<span>刪改</span>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {MdlTooltip, MdlButton, MdlTextfield, MdlIconToggle} from 'vue-mdl'
  //  import store from 'store'
  import previewStorage from '../store'
  //  let inititem = {
  //    key: 0, data: {
  //      type: 'cover',
  //      title: '',
  //      cover: '',
  //      content: ''
  //    }
  //  }
  export default {
    data () {
      return {
        preview: previewStorage.fetch,
        newPreview: '',
        editedPreview: null,
        tempKey: 1
      }
    },
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield,
      MdlIconToggle,
      "vue-html-editor": require("vue-html-editor")
    },
    watch: {
      preivew: {
        deep: true,
        handler: previewStorage.save
      }
    },
    methods: {
      addPreview: function () {
//        this.preview.push({title: 'dddddd', completed: false})
        this.newPreview = ''
      }

    }
  }
</script>
