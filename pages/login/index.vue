<template lang="pug">
div ログイン
</template>

<script>
export default {
  head() {
    return {
      title: 'ログイン'
    }
  },
  middleware: 'notAuthenticated',
  data() {
    return {}
  },
  methods: {}
}
</script>
