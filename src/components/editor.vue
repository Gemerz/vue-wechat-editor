<style lang="scss">

  .quill-editor {
    min-height: 350px;
    border: 1px solid #EEEEEE;
  }

</style>

<template>

  <div class="quill-editor">
    <link href="http://cdn.quilljs.com/latest/quill.snow.css" rel="stylesheet">
    <div v-el:toolbar class="ui top attached menu toolbar ql-toolbar ql-snow">
      <slot name="toolbar">

        <div class="ql-format-group">
          <select class="ql-size">
            <option value="10px">Small</option>
            <option value="13px" selected>Normal</option>
            <option value="18px">Large</option>
            <option value="32px">Huge</option>
          </select>
          <span class="ql-format-separator"></span>
          <a class="ql-format-button ql-bold"></a>
          <span class="ql-format-separator"></span>
          <a class="ql-format-button ql-underline"></a>
          <span class="ql-format-separator"></span>
          <a class="ql-format-button ql-italic"></a>
        </div>
        <div class="ql-format-group">
          <select title="Text Color" class="ql-color">
            <option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)" selected=""></option>
            <option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"></option>
            <option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"></option>
            <option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"></option>
            <option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"></option>
            <option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"></option>
            <option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"></option>
            <option value="rgb(255, 255, 255)" label="rgb(255, 255, 255)"></option>
            <option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)"></option>
            <option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)"></option>
            <option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)"></option>
            <option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)"></option>
            <option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)"></option>
            <option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)"></option>
            <option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)"></option>
            <option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)"></option>
            <option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)"></option>
            <option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)"></option>
            <option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)"></option>
            <option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)"></option>
            <option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)"></option>
            <option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)"></option>
            <option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"></option>
            <option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"></option>
            <option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"></option>
            <option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"></option>
            <option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"></option>
            <option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"></option>
            <option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"></option>
            <option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"></option>
            <option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"></option>
            <option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"></option>
            <option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"></option>
            <option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"></option>
            <option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"></option>
          </select>
          <select title="Background Color" class="ql-background">
            <option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)"></option>
            <option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"></option>
            <option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"></option>
            <option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"></option>
            <option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"></option>
            <option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"></option>
            <option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"></option>
            <option value="rgb(255, 255, 255)" label="rgb(255, 255, 255)" selected=""></option>
            <option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)"></option>
            <option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)"></option>
            <option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)"></option>
            <option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)"></option>
            <option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)"></option>
            <option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)"></option>
            <option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)"></option>
            <option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)"></option>
            <option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)"></option>
            <option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)"></option>
            <option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)"></option>
            <option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)"></option>
            <option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)"></option>
            <option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)"></option>
            <option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"></option>
            <option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"></option>
            <option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"></option>
            <option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"></option>
            <option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"></option>
            <option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"></option>
            <option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"></option>
            <option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"></option>
            <option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"></option>
            <option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"></option>
            <option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"></option>
            <option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"></option>
            <option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"></option>
          </select>
        </div>

        <div class="ql-format-group">
          <span title="List" class="ql-format-button ql-list"></span>
          <span class="ql-format-separator"></span>
          <span title="Bullet" class="ql-format-button ql-bullet"></span>
          <span class="ql-format-separator"></span>
          <select title="Text Alignment" class="ql-align">
            <option value="left" label="Left" selected=""></option>
            <option value="center" label="Center"></option>
            <option value="right" label="Right"></option>
            <option value="justify" label="Justify"></option>
          </select>
        </div>
        <div class="ql-format-group">
          <span class="ql-format-separator"></span>
          <span title="Link" class="ql-format-button ql-link"></span>
        </div>
      </slot>
    </div>
    <div class="ui attached segment" v-el:quill @click.prevent="focusEditor"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {
    MdlTooltip, MdlButton, MdlTextfield
  }
    from 'vue-mdl'
  import Quill from 'quill/dist/quill'
  export default {
    props: {
      content: {},
      author: {},
      formats: {
        type: Array,
        default () {
          return []
        },
        keyBindings: {
          type: Array,
          default () {
            return []
          },
        },
        output: {
          default: 'delta'
        },
        keyup: {
          default: null
        }
      }
    },
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield

    },
    data() {
      return {
        editor: {}
      }
    },
    ready() {
      this.editor = new Quill(this.$els.quill, {
        modules: {
          toolbar: this.$els.toolbar,
          'link-tooltip': true
        },
        theme: 'snow'
      })

      this.formats.map((format) => {
        this.editor.addFormat(format.name, format.options)
      })

      if (this.output != 'delta') {
        this.editor.setHTML(this.content);
      } else {
        this.editor.setContents(this.content);
      }

      this.editor.on('text-change', (delta, source) => {
        this.$dispatch('text-change', this.editor, delta, source)
        this.content = this.output != 'delta' ? this.editor.getHTML() : this.editor.getContents()
      })

      this.editor.on('selection-change', (range) => {
        this.$dispatch('selection-change', this.editor, range)
      })
      if (typeof this.author !== 'undefined') {
        this.editor.addModule('authorship', {
          authorId: this.author
        })
      }
      if (this.keyBindings) {
        const keyboard = this.editor.getModule('keyboard')

        this.keyBindings.map((binding) => {
          keyboard.addHotkey({
            key: binding.key,
            metaKey: true
          }, binding.method.bind(this))
        })
      }
    },
    events: {
      'set-content': function (content) {
        this.editor.setContents(content)
      },
      'set-html': function (html) {
        this.editor.setHtml(html)
      },
      'focus-editor': function () {
        this.focusEditor()
      }
    },
    methods: {
      focusEditor(e) {
        if (e && e.srcElement) {
          let classList = e.srcElement.classList,
            isSegment = false;
          classList.forEach((className) => {
            if (className === 'segment') {
              isSegment = true
              return
            }
          })
          if (!isSegment) return;
        }
        this.editor.focus()
        this.editor.setSelection(this.editor.getLength() - 1, this.editor.getLength())
      }
    },
  }
</script>
