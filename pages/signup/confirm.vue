<template lang="pug">
div サインアップ - メール確認
</template>

<script>
export default {
  head() {
    return {
      title: 'メール確認'
    }
  },
  middleware: 'notAuthenticated',
  data() {
    return {}
  },
  methods: {}
}
</script>
