<template>
  <div class="mdl-cell mdl-cell--5-col">
    <div id="wechat-editor">
      <div class='wechat-editor-wrap'>
        <div class='wechat-editor'>
          <div class='editor'>
            <div class="active-arrow" :style="{ top: activeArrowStyle + 'px' }"></div>
            <div class="editor-preview">
              <div class='editor-item' v-for="preview in previews | orderBy 'key'">
                <div v-if="preview.data.type =='cover'" class="cover-container">
                  <div class='cover'>
                    <img class='cover-img' :src="preview.data.cover"/>
                    <span class='thumbnail-holder'></span>
                    <h4 class='title'>{{preview.data.title}}</h4>
                    <div class='editor-item-edit' @click="editPreview(preview.key)">
                      <a @click="previewCard(preview.key)">
                        <mdl-tooltip for="pv-edit-button">浏览</mdl-tooltip>
                        <i id="pv-edit-button" class="material-icons">photo</i>
                      </a>
                      <a @click="editPreview(preview.key)">
                        <mdl-tooltip for="pv-add-button">編輯</mdl-tooltip>
                        <i id="pv-add-button" class="material-icons">&#xE150;</i>
                      </a>
                      <a @click="deletePreviews(preview.key)">
                        <mdl-tooltip for="pv-delete-button">删除</mdl-tooltip>
                        <i id="pv-delete-button" class="material-icons">delete</i>
                      </a>
                      <div class="sort-pannel">
                        <a class="up" v-show="preview.key > 0" @click="sortUp(preview.key)">
                          <mdl-tooltip for="cover-btn-up">上移</mdl-tooltip>
                          <i id="cover-btn-up" class="material-icons">keyboard_arrow_up</i>
                        </a>
                        <a class="down" @click="sortDown(preview.key)">
                          <mdl-tooltip for="cover-btn-down">下移</mdl-tooltip>
                          <i id="cover-btn-down" class="material-icons">keyboard_arrow_down</i>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
                <div v-else class="list-coantainer">
                  <div class='list'>
                    <h4 class='list-title'>{{preview.data.title}}</h4>
                    <span class='thumbnail'>
                      <img class='cover-img' :src="preview.data.cover"/>
                    </span>
                    <div class='editor-item-edit' @click="editPreview(preview.key)">
                      <a @click="previewCard(preview.key)">
                        <mdl-tooltip :for="'view-'+preview.key">浏览</mdl-tooltip>
                        <i :id="'view-'+preview.key" class="material-icons">photo</i>
                      </a>
                      <a @click="editPreview(preview.key)">
                        <mdl-tooltip :for="'edit-'+preview.key">編輯</mdl-tooltip>
                        <i :id="'edit-'+preview.key" class="material-icons">&#xE150;</i>
                      </a>
                      <a @click="deletePreviews(preview.key)">
                        <mdl-tooltip :for="'del-'+preview.key">删除</mdl-tooltip>
                        <i :id="'del-'+preview.key" class="material-icons">delete</i>
                      </a>
                      <div class="sort-pannel">
                        <a class="up" v-show="preview.key > 0" @click="sortUp(preview.key)">
                          <mdl-tooltip for="list-btn-up">上移</mdl-tooltip>
                          <i id="list-btn-up" class=" material-icons">keyboard_arrow_up</i>
                        </a>
                        <a class="down" v-show="preview.key < previews.length - 1" @click="sortDown(preview.key)">
                          <mdl-tooltip for="list-btn-down">下移</mdl-tooltip>
                          <i id="list-btn-down" class="material-icons">keyboard_arrow_down</i>
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
  </div>
  <div class="mdl-cell mdl-cell--7-col">
    <forms :previews="previews" :current-index="currentKey"></forms>
  </div>
  <mdl-snackbar display-on="noticePreview"></mdl-snackbar>


  <div v-if="editedPreview !== null" class="editpreviewcard">
    <mdl-dialog title="預覽" display-on="infoMessage" cancellable>
      <mdl-card class="demo-card-welcome" :title="editedPreview.data.title ? editedPreview.data.title:' '"
                :supporting-text="editedPreview.data.content?editedPreview.data.content:' '"
                :media="editedPreview.data.cover"></mdl-card>
    </mdl-dialog>
  </div>


</template>

<script>
  import {
    MdlTooltip,
    MdlButton,
    MdlTextfield,
    MdlIconToggle,
    MdlCheckbox,
    MdlSnackbar,
    MdlDialog,
    MdlCard
  } from 'vue-mdl'
  import store from 'store'
  import forms from './forms.vue'
  //  import Immutable from 'immutable'

  let initItem = [{
    key: 0, data: {
      type: 'cover',
      title: '',
      author: '',
      cover: '/static/cover-default.png',
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
        activeArrowStyle: 90,
        currentKey: 0
      }
    },
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield,
      MdlIconToggle,
      MdlCheckbox,
      MdlSnackbar,
      MdlDialog,
      MdlCard,
      forms
    },
    watch: {
      previews: {
        handler: function (previews) {
          store.set('previewST', previews)
        }
      },
      infoMessage: {
        handler: function (editedPreview) {
          this.editedPreview = editedPreview
        }
      }
    },
    methods: {
      addPreview: function () {
        let newPreview = Object.assign({}, this.previews[this.tempKey - 1], {
          key: this.tempKey++, data: {
            type: 'list',
            title: '',
            author: '',
            cover: '/static/cover-list.png',
            content: ''
          }
        })
        this.previews.push(newPreview)
        this._editPreviewStyle(this.previews.length - 1)
      },
      sortUp: function (key) {
        if (this.previews.length > 1) {
          this.previews[key] = Object.assign(this.previews[key], {
            key: key - 1, data: {
              type: (key - 1) === 0 ? 'cover' : 'list',
              title: this.previews[key].data.title,
              author: this.previews[key].data.author,
              cover: this.previews[key].data.cover,
              content: this.previews[key].data.content
            }
          })
          this.previews[key - 1] = Object.assign(this.previews[key - 1], {
            key: key, data: {
              type: (key) === 0 ? 'cover' : 'list',
              title: this.previews[key - 1].data.title,
              author: this.previews[key - 1].data.author,
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
      },
      sortDown: function (key) {
        if (this.previews.length > 1) {
          this.previews[key] = Object.assign(this.previews[key], {
            key: key + 1, data: {
              type: (key + 1) === 0 ? 'cover' : 'list',
              title: this.previews[key].data.title,
              author: this.previews[key].data.author,
              cover: this.previews[key].data.cover,
              content: this.previews[key].data.content
            }
          })
          this.previews[key + 1] = Object.assign(this.previews[key + 1], {
            key: key, data: {
              type: (key) === 0 ? 'cover' : 'list',
              title: this.previews[key + 1].data.title,
              author: this.previews[key + 1].data.author,
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
        this._editPreviewStyle(key)
        this.editedPreview = this.previews[key]
        this.currentKey = key
      },
      _editPreviewStyle: function (key) {
        if (key === 0) {
          this.activeArrowStyle = 90
        } else if (key === 1) {
          this.activeArrowStyle = 240
        } else {
          this.activeArrowStyle = 240 + (90 * (key - 1))
        }
      },
      updateFeild: function () {
//        console.log(this.previews)
      },
      deletePreviews: function (key) {
        if (this.previews.length > 1) {
          this.previews.splice(key, 1)
          this._sortDelete(key)
        } else {
          this.$broadcast('noticePreview', {message: '最少保留一條條文信息'})
        }
      },
      _sortDelete: function (key) {
        this.previews.forEach(function (val, index) {
          val.key = index
          if (val.key === 0) {
            val.data.type = 'cover'
          } else {
            val.data.type = 'list'
          }
        })
        this.tempKey = this.previews.length
        this.editPreview(key === this.previews.length ? key - 1 : key)
      },
      previewCard: function (key) {
        this.editPreview(key)
        if (this.editedPreview !== null) {
          this.$broadcast('infoMessage')
        }
      }
    }
  }
</script>
<style lang="sass?outputStyle=expanded">
  .mdl-textfield {
    width: 100%;
  }
  .forms {
    padding: 15px;
  }

  .mdl-card__media img {
    max-width: 100%;
  }
</style>
