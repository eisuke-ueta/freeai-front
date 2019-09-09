<template lang="pug">
div サインアップ - ユーザー登録完了
</template>

<script>
export default {
  head() {
    return {
      title: 'ユーザー登録完了'
    }
  },
  middleware: 'notAuthenticated',
  data() {
    return {}
  },
  methods: {}
}
</script>
