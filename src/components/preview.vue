<template>
  <div id="wechat-editor">
    <div class='wechat-editor-wrap'>
      <div class='wechat-editor'>
        <div class='editor'>
          <div class="active-arrow" :style="{ top: activeArrowStyle + 'px' }"></div>
          <div class="editor-preview">
            <div class='editor-item' v-for="preview in previews | orderBy 'key'">
              <div v-if="preview.data.type =='cover'" class="cover-coantainer">
                <div class='cover'>
                  <img class='cover-img'/>
                  <span class='thumbnail-holder'></span>
                  <h4 class='title'></h4>
                  <div class='editor-item-edit' @click="editPreview(preview.key)">
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
                      <a class="up" v-show="preview.key > 0" @click="sortUp(preview.key)">
                        <i class="material-icons">keyboard_arrow_up</i>
                      </a>
                      <a class="down" @click="sortDown(preview.key)">
                        <i class="material-icons">keyboard_arrow_down</i>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
              <div v-else class="list-coantainer">
                <div class='list'>
              <span class='thumbnail'>
              </span>
                  <div class='editor-item-edit' @click="editPreview(preview.key)">
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
                    <div class="sort-pannel">
                      <a class="up" v-show="preview.key > 0" @click="sortUp(preview.key)">
                        <i class=" material-icons">keyboard_arrow_up</i>
                      </a>
                      <a class="down" v-show="preview.key < previews.length - 1" @click="sortDown(preview.key)">
                        <i class="material-icons">keyboard_arrow_down</i>
                      </a>
                    </div>
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

  </div>
</template>

<script>
  import {MdlTooltip, MdlButton, MdlTextfield, MdlIconToggle} from 'vue-mdl'
  import store from 'store'
  //  import Immutable from 'immutable'
  let initItem = [{
    key: 0, data: {
      type: 'cover',
      title: '',
      cover: '',
      content: ''
    }
  }]
  store.set('previewST', initItem)
  export default {
    data () {
      return {
        previews: initItem,
        newPreview: '',
        editedPreview: null,
        tempKey: 1,
        activeArrowStyle: 90
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
          store.set('previewST', previews)
        }
      }
    },
    methods: {
      addPreview: function () {
        let newPreview = Object.assign({}, this.previews[this.tempKey - 1], {
          key: this.tempKey++, data: {
            type: 'list',
            title: '2',
            cover: '',
            content: ''
          }
        })
        this.previews.push(newPreview)
      },
      sortUp: function (key) {
        if (this.previews.length > 1) {
          this.previews[key] = Object.assign(this.previews[key], {
            key: key - 1, data: {
              type: (key - 1) === 0 ? 'cover' : 'list',
              title: this.previews[key].data.title,
              cover: this.previews[key].data.cover,
              content: this.previews[key].data.content
            }
          })
          this.previews[key - 1] = Object.assign(this.previews[key - 1], {
            key: key, data: {
              type: (key) === 0 ? 'cover' : 'list',
              title: this.previews[key - 1].data.title,
              cover: this.previews[key - 1].data.cover,
              content: this.previews[key - 1].data.content
            }
          })
        }
        this.previews.sort(function (a, b) {
          if (a.key < b.key) {
            return -1
          } else if (a.key > b.key) {
            return 1
          } else {
            return 0
          }
        })
        console.log(this.previews)
      },
      sortDown: function (key) {
        if (this.previews.length > 1) {
          this.previews[key] = Object.assign(this.previews[key], {
            key: key + 1, data: {
              type: (key + 1) === 0 ? 'cover' : 'list',
              title: this.previews[key].data.title,
              cover: this.previews[key].data.cover,
              content: this.previews[key].data.content
            }
          })
          this.previews[key + 1] = Object.assign(this.previews[key + 1], {
            key: key, data: {
              type: (key) === 0 ? 'cover' : 'list',
              title: this.previews[key + 1].data.title,
              cover: this.previews[key + 1].data.cover,
              content: this.previews[key + 1].data.content
            }
          })
        }
        this.previews.sort(function (a, b) {
          if (a.key < b.key) {
            return -1
          } else if (a.key > b.key) {
            return 1
          } else {
            return 0
          }
        })
      },
      editPreview: function (key) {
        this.editPreviewStyle(key)
        this.editedPreview = this.previews[key]
        console.log(this.editedPreview)
      },
      editPreviewStyle: function (key) {
        if (key === 0) {
          this.activeArrowStyle = 90
        } else if (key === 1) {
          this.activeArrowStyle = 240
        } else {
          this.activeArrowStyle = 240 + (90 * (key - 1))
        }
      }
    }
  }
</script>
