<template>
  <div id="wechat-editor">
    <div class='wechat-editor-wrap'>
      <div class='wechat-editor'>
        <div class='editor'>
          <div class='editor-item' v-for="preview in items">
            <div v-if="preview.data.type =='cover'">
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
                  <div class="sort-pannel">
                    <a>
                      <i class="up material-icons">keyboard_arrow_up</i>
                    </a>
                    <a>
                      <i class=" down material-icons">keyboard_arrow_down</i>
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div v-else>
              <div class='editor-item'>
              <span class='thumbnail'>
              </span>
                <div class='editor-item-edit'>
                  <a>
                    <mdl-tooltip for='@preview.key-pv-edit-button'>浏览</mdl-tooltip>
                    <i id="{{preview.key}}-pv-edit-button" class="material-icons">photo</i>
                  </a>
                  <a>
                    <mdl-tooltip for="{{preview.key}}pv-add-button">新增</mdl-tooltip>
                    <i id="{{preview.key}}pv-add-button" class="material-icons">add</i>
                  </a>
                  <a>
                    <mdl-tooltip for="{{preview.key}}pv-delete-button">删除</mdl-tooltip>
                    <i id="{{preview.key}}pv-delete-button" class="material-icons">delete</i>
                  </a>

                </div>
              </div>
            </div>

          </div>
          <div class="editor-add">
            <a class="editor-add-btn" @click="addPreview">
              <mdl-tooltip for="editor-add-button">新增</mdl-tooltip>
              <i id="editor-add-button" class="material-icons">add</i>
            </a>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {MdlTooltip, MdlButton, MdlTextfield, MdlIconToggle} from 'vue-mdl'
  import store from 'store'
  let initItem = [{
    key: 0, data: {
      type: 'cover',
      title: '',
      cover: '',
      content: ''
    }
  }]
  store.set('previewST', initItem)
  //  const previewST = store.get('previewST')
  export default {
    data () {
      return {
        previews: store.get('previewST'),
        newPreview: '',
        editedPreview: null,
        tempKey: 1,
        items: initItem
      }
    },
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield,
      MdlIconToggle
    },
    watch: {
      previews: {
        handler: function (previews) {
          store.get('previewST', previews)
        }
      },
      items: {
        handler: function (items) {
          store.set('previewST', items)
        },
        deep: true
      }
    },
    methods: {
      addPreview: function () {
        let newPreview = Object.assign({}, initItem[this.tempKey - 1], {
          key: this.tempKey++, data: {
            type: 'list',
            title: '',
            cover: '',
            content: ''
          }
        })
        this.items.push(newPreview)
        this.previews = store.get('previewST')
        console.log(this.previews)
      }
    }
  }
</script>
