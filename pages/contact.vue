<template lang="pug">
div
  | contact
</template>

<script>
export default {
  middleware: 'notAuthenticated',
  components: {},
  head() {
    return {
      title: 'お問い合わせ'
    }
  }
}
</script>
