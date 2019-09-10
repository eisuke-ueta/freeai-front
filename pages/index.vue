<template lang="pug">
div
  section
    el-row(type="flex" justify="center" class="text-center")
      el-col(:xs="24" :sm="18" :md="12")
        h1 手軽にAI-OCR体験を
        p だれでも、かんたん、高精度。あらゆる書類をすぐにテキスト化。手書き、活字、FAX、写真で撮った書類まで、もう手入力は不要です。最先端テクノロジーの体験をどうぞ。
  section(v-if="!imageUrl")
    el-row(type="flex" justify="center" class="text-center" class="mb4")
      el-col(:xs="24" :sm="18" :md="12")
        el-upload(
          class="mb2"
          drag
          :multiple="false"
          accept="image/png,image/jpeg"
          action="#"
          :on-success="onFileUpload")
          i(class="el-icon-upload")
          br
          small(class="pa2") ここにファイルをドラッグ&ドロップして下さい
        small ファイルは1日後に自動で削除されます。無料アカウント登録すると、PDFもテキスト化できます。
  section(v-if="imageUrl" v-loading="loading")
    el-row(class="text-center mb4")
      el-col(:xs="24" class="box-container")
        div(class="box ma2 light-shadow")
          el-image(:src="imageUrl" lazy)
        div(class="box ma2")
          el-input(class="mb2" type="textarea" :rows="20" v-model="imageText")
          div(class="text-right")
              el-button(size="small") コピー
              el-button(size="small") ダウンロード
  section(class="bg-color-grey-extra-light contact-section")
    el-row(class="text-center pa4")
      el-col
        h3 自社でAI-OCRを利用してみませんか？
        el-button(type="primary") お問い合わせ
  section
    el-row(type="flex" justify="center" class="text-center")
      el-col(:xs="24" :sm="18" :md="12")
        h2 AI-OCRの利用方法
        p あらゆる書類を、高精度でデジタルデータ化。手書き、活字、FAX、写真で撮った書類まで、もう手入力は不要です。誰でも使い始めたその日から、すぐに体験いただけます。
    el-row(type="flex" justify="center" class="text-center")
      el-col(:xs="24" :sm="18" :md="12")
        el-divider
    el-row(type="flex" justify="center")
      el-col(:xs="24" :sm="18" :md="12")
        h3 ファイルを選択するだけ
        p ファイルは、暗号化されたSSL接続を介して安全に転送されます。 ファイルは非公開のままで、処理後に完全に削除されます。
        p ファイルをウェブページにドラッグ&ドロップ。または、ご利用のコンピュータから選択して下さい。
    el-row(type="flex" justify="center")
      el-col(:xs="24" :sm="18" :md="12")
        h3 AI-OCRの精度
        p OCRの精度を確認するには、変換されたテキスト情報とファイルを比較してみましょう。
        p ファイルの解像度が高いほどより良い結果になります。OCRを利用する前にファイルを圧縮しないようにして下さい。
        p 100%の精度は保証できませんが、ユーザーの皆さんが満足する結果になるように精度向上に挑戦し続けます。
  section
    el-row(class="text-center pa4")
      el-col
        h2 PDFのAI-OCRを体験しませんか？
        el-button(type="primary") PDFをテキスト情報に変換する
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
      this.loading = true
      try {
        let response = await this.uploadImage({ form: { file: file.raw } })
        if (response.status !== 200) return

        this.imageUrl = response.data.urls[0]

        response = await this.ocrImage({ form: { image_url: this.imageUrl } })
        this.imageText = response.data.text
      } catch (e) {
        console.log(e)
      }
      this.loading = false
    },
    ...mapActions('file', ['uploadImage', 'ocrImage'])
  }
}
</script>

<style scoped>
section {
  padding: 2rem;
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
