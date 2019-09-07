<template lang="pug">
div
  el-row(class="text-center mb4")
    el-col
      h1 OCR Recognize Text in PDF Online
      p(class="color-text-regular") Convert PDF scans to searchable text and PDFs. Extract text from scans
  el-row(class="text-center mb4")
    el-col
      el-upload(
        class="mb2"
        drag 
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList")
        i(class="el-icon-upload")
        div(class="color-text-regular") Drag & drop files anywhere on the page to upload
      small Files stay private. Automatically deleted after 2 hours. Free service for documents up to 50 pages or 50 Mb and 3 tasks per hour. PRO service for documents up to 100 pages
  el-divider
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
  el-row(class="text-center pa4")
    el-col
      h2 Ready to OCR your PDF file?
      el-button(type="primary") OCR Recognize Text in PDF Online free
</template>

<script>
export default {
  middleware: 'notAuthenticated',
  components: {},
  head() {
    return {
      titleTemplate: null,
      title: 'Freeai | AI-OCR'
    }
  },
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    handlePreview() {},
    handleRemove() {}
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
