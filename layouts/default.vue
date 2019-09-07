<template lang="pug">
el-container
  el-header
    el-menu(default-active="top" mode="horizontal")
      el-menu-item(index="top") freeai
      el-menu-item(index="ai-ocr") PDF
  el-main
    nuxt
  el-footer(class="footer pa4")
    el-row(:gutter="10")
      el-col(class="mb3" :xs="24" :sm="8")
        small &copy;2019 - Sudachi
      el-col(class="mb3" :xs="24" :sm="8")
        div(class="mb1")
          el-link(href="https://www.google.com/") Contact
        div(class="mb1")
          el-link(href="https://www.google.com/") Terms of Use
        div(class="mb1")
          el-link(href="https://www.google.com/") Privacy policy
      el-col(class="mb3" :xs="24" :sm="8")
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
    handleLogout() {}
  }
}
</script>

<style>
.el-footer {
  height: auto !important;
  padding: 2rem;
  background-color: #ebeef5;
}
</style>
