<template lang="pug">
div(class="pa4")
  el-row(type="flex" justify="center")
    el-col(:xs="24" :sm="16" :md="8")
      el-card(shadow="never")
        div(slot="header")
          span ログイン
        div
          el-form(ref="form" :model="form" :rules="rules")
            el-form-item(prop="email")
              el-input(v-model="form.email" type="email" placeholder="メールアドレス" prefix-icon="el-icon-message")
            el-form-item(prop="password")
              el-input(v-model="form.password" type="password" placeholder="パスワード" prefix-icon="el-icon-lock")
            el-form-item
              el-button(class="block" type="primary" @click="onSubmit('form')") ログイン
          div(class="text-right mb1")
            el-link(type="primary" href="/contact") パスワードを忘れた方はこちら
          div(class="text-right mb1")
            el-link(type="primary" href="/signup") サインアップはこちら
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
    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        password: [
          {
            required: true,
            message: 'パスワードを入力してください',
            trigger: 'change'
          },
          {
            min: 6,
            message: 'パスワードは6文字以上にしてください',
            trigger: 'change'
          }
        ],
        email: [
          {
            required: true,
            message: 'メールアドレスを入力してください',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped></style>
