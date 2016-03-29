<template>
  <div class="forms" v-for="preview in previews" v-show="preview.key ===currentIndex">
    <form>
      <mdl-textfield floating-label="标题：" :value.sync="preview.data.title"></mdl-textfield>
      <mdl-textfield floating-label="作者：（选填）">{{preview.data.author}}</mdl-textfield>

      <file-upload :key="preview.key" :type="preview.data.type"></file-upload>
      <div v-show="preview.data.type === 'cover'">
        <mdl-textfield floating-label="摘要：（选填，该摘要只在发送图文消息为单条时显示）" textarea rows="4"></mdl-textfield>
      </div>

    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import {MdlTooltip, MdlButton, MdlTextfield} from 'vue-mdl'
  import FileUpload from './fileupload.vue'
  export default{
    props: {
      previews: {
        type: Array,
        required: true
      },
      currentIndex: {
        type: Number,
        required: true
      }
    },
    components: {
      MdlTooltip,
      MdlButton,
      MdlTextfield,
      FileUpload
    },
    methods: {},
    events: {
      getCover: function (url, key) {
        this.previews.map((items)=> {
          if (items.key === key) {
            items.data.cover = url
          }
        })
      }
    }
  }
</script>


