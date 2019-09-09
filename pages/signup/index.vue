<template lang="pug">
div サインアップ
</template>

<script>
export default {
  head() {
    return {
      title: 'サインアップ'
    }
  },
  middleware: 'notAuthenticated',
  data() {
    return {}
  },
  methods: {}
}
</script>
