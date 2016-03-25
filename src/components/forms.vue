<template>
  <div class="forms" v-for="preview in previews" v-show="preview.key ===currentIndex">
    <form>
      <mdl-textfield floating-label="标题：" :value.sync="preview.data.title"></mdl-textfield>
      <mdl-textfield floating-label="作者：（选填）">{{preview.data.author}}</mdl-textfield>

      <div class="mdl-textfield mdl-js-textfield upload-field">
        <div v-show="preview.data.type === 'cover'">
          <label class="mdl-textfield__label">封面：(大图片建议尺寸：900像素*500像素 格式：png、gif、jpg）</label>
          <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
            <i class="material-icons">&#xE864;</i>
          </a>
          <input type="file"/>
        </div>
        <div v-show="preview.data.type === 'list'">
          <label class="mdl-textfield__label">封面：（小图片建议尺寸：200像素 * 200像素 格式：png、gif、jpg）</label>
          <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
            <i class="material-icons">&#xE864;</i>
          </a>
        </div>
      </div>
      <div v-show="preview.data.type === 'cover'">
        <mdl-textfield floating-label="摘要：（选填，该摘要只在发送图文消息为单条时显示）" textarea rows="4">{{}}</mdl-textfield>
      </div>

    </form>
  </div>
</template>

<script>
  import {MdlTooltip, MdlButton, MdlTextfield} from 'vue-mdl'
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
      MdlTextfield
    },
    methods: {}
  }
</script>


