<template lang="pug">
div(class="pa4")
  el-row(type="flex" justify="center")
    el-col(:xs="24" :sm="16" :md="8")
      el-card(shadow="never")
        div(slot="header")
          span サインアップ
        div
          el-form(ref="form" :model="form" :rules="rules")
            el-form-item(prop="name")
              el-input(v-model="form.name" placeholder="名前" prefix-icon="el-icon-user")
            el-form-item(prop="email")
              el-input(v-model="form.email" type="email" placeholder="メールアドレス" prefix-icon="el-icon-message")
            el-form-item(prop="password")
              el-input(v-model="form.password" type="password" placeholder="パスワード" prefix-icon="el-icon-lock")
            el-form-item
              el-button(class="block" type="primary" @click="onSubmit('form')") サインアップ
          div(class="mb1")
            small 個人情報の取扱いについては、プライバシーポリシーの定めに従うものとします。
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
        name: '',
        email: '',
        password: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '名前を入力してください',
            trigger: 'change'
          },
          {
            min: 3,
            max: 20,
            message: '名前は3〜20文字で入力してください',
            trigger: 'change'
          }
        ],
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
