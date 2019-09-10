<template lang="pug">
el-container
  el-header
    el-menu(mode="horizontal" @select="handleSelect")
      el-menu-item(index="/")
        span(class="header-title") freeai
      el-menu-item(index="pdf") PDF
      el-menu-item(class="float-right" index="settings") 設定
      el-menu-item(class="float-right" index="signup") サインアップ
      el-menu-item(class="float-right" index="login") ログイン
  el-main
    nuxt
  el-footer
    el-row(:gutter="10")
      el-col(class="mb3" :xs="24" :sm="8")
        small &copy;2019 - Eisuke Ueta
      el-col(class="mb3" :xs="12" :sm="8")
        div(class="mb1")
          el-link(href="/contact") お問い合わせ
        div(class="mb1")
          el-link(href="/terms") 利用規約
        div(class="mb1")
          el-link(href="/privacy") プライバシーポリシー
      el-col(class="mb3" :xs="12" :sm="8")
        div(class="mb1")
          el-link(href="https://www.google.com/") Twitter
        div(class="mb1")
          el-link(href="https://www.google.com/") Note
</template>

<script>
export default {
  data() {
    return {
      title: 'Freeai | Feel free to use the power of AI'
    }
  },
  methods: {
    linkToHome() {
      this.$router.push('/')
    },
    handleLogout() {},
    handleSelect(key, keyPath) {
      this.$router.push(key)
    }
  }
}
</script>

<style>
.header-title {
  font-size: 1.5rem;
}
.el-header {
  padding: 0;
}
.el-menu {
  padding: 0 1rem;
}
.el-main {
  padding: 0;
  margin-bottom: 150px;
}
.el-footer {
  padding: 2rem;
  background-color: #ebeef5;
  position: absolute;
  height: 150px !important;
  width: 100%;
  bottom: 0;
  margin: 0 auto;
}
</style>
