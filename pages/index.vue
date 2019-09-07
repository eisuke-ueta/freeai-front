<template lang="pug">
div
  section
    el-row(class="text-center mb4")
      el-col
        h1 OCR Recognize Text in PDF Online
        p(class="color-text-regular") Convert PDF scans to searchable text and PDFs. Extract text from scans
  section(v-if="!imageUrl")
    el-row(type="flex" justify="center" class="text-center mb4")
      el-col(:xs="24" :sm="18" :md="12")
        el-upload(
          class="mb2"
          drag 
          accept="image/png,image/jpeg"
          action=""
          :on-success="onFileUpload")
          i(class="el-icon-upload")
          div(class="pa2") Drag & drop files anywhere on the page to upload
        small Files stay private. Automatically deleted after 2 hours. Free service for documents up to 50 pages or 50 Mb and 3 tasks per hour. PRO service for documents up to 100 pages
  section(v-if="imageUrl" v-loading="loading")
    el-row(class="text-center mb4")
      el-col(:xs="24" class="box-container")
        div(class="box ma2 light-shadow")
          el-image(:src="imageUrl" lazy)
        div(class="box ma2")
          el-input(class="mb2" type="textarea" :rows="20" v-model="imageText")
            el-button(size="small") Copy
          div(class="text-right")
              el-button(size="small") Copy
              el-button(size="small") Download
  el-divider
  section
    el-row(class="text-center")
      el-col
        h2 How To Recognize Text With OCR And Convert To Searchable PDF Documents
        h3 Below we show how to OCR convert PDF documents, for free.
    el-row(type="flex" justify="center")
      el-col(:xs="24" :sm="18" :md="12")
        h3 Step 1: Select your PDF file
        p Files are transfered safely over an encrypted SSL connection. Documents stay private and are permanently removed after processing.
        p Click Upload PDF files and choose files from your computer. Can also drag and drop files anywhere on the page.
    el-row(type="flex" justify="center")
      el-col(:xs="24" :sm="18" :md="12")
        h3 Step 2: Select the language of your document
        p The OCR conversion process works best when the language is specified. This way ambiguous words are easier resolved based on the language dictionary.
        p You'll get a searchable PDF document as a result, where the invisible text is overlayed on the original images at the correct locations.
    el-row(type="flex" justify="center")
      el-col(:xs="24" :sm="18" :md="12")
        h3 Accuracy of the OCR process
        p To inspect the accuracy of the OCR process, open the PDF document, select all text (Ctrl+A) and copy & paste it into a text file.
        p Higher resolution documents consistently lead to better results. Don't compress your scans before running the OCR process.
        p Unfortunately we can't guarantee 100% accuracy on the recognized text, this is a best-effort approach.
  section
    el-row(class="text-center pa4")
      el-col
        h2 Ready to OCR your PDF file?
        el-button(type="primary") OCR Recognize Text in PDF Online free
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'notAuthenticated',
  components: {},
  head() {
    return {
      titleTemplate: null,
      title: 'Freeai | Feel free to use the power of AI'
    }
  },
  data() {
    return {
      imageUrl: '',
      imageText: '',
      loading: false
    }
  },
  methods: {
    async onFileUpload(res, file, fileList) {
      let response = await this.uploadImage({ form: { file: file.raw } })
      if (response.status !== 200) {
        console.log(response)
        return
      }

      const urls = response.data.urls
      if (urls.length === 0) return
      this.imageUrl = urls[0]

      this.loading = true
      response = await this.ocrImage({ form: { image_url: this.imageUrl } })
      if (response.status !== 200) {
        console.log(response)
        this.loading = false
        return
      }

      this.imageText = response.data.text
      this.loading = false
    },
    ...mapActions('file', ['uploadImage', 'ocrImage'])
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
.box-container {
  vertical-align: top;
}
.box {
  height: auto;
  max-width: 450px;
  width: 100%;
  vertical-align: top;
  display: inline-block;
}
</style>
