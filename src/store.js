const STORAGE_KEY = 'wiz_preview'
const previewStorage = {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (preview) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preview))
  }
}
export default previewStorage
