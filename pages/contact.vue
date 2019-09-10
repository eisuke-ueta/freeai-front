<template lang="pug">
div(class="pa4")
  el-row(type="flex" justify="center")
    el-col(:xs="24" :sm="16" :md="8")
      el-card(shadow="never")
        div(slot="header")
          span お問い合わせ
        div
          el-form(ref="form" :model="form" :rules="rules")
            el-form-item(prop="name")
              el-input(v-model="form.name" placeholder="名前" prefix-icon="el-icon-user")
            el-form-item(prop="company")
              el-input(v-model="form.company" placeholder="会社名" prefix-icon="el-icon-user")
            el-form-item(type="email" prop="email")
              el-input(v-model="form.email" placeholder="メールアドレス" prefix-icon="el-icon-office-building")
            el-form-item(type="content" prop="content")
              el-input(v-model="form.content" type="textarea" :rows="5" placeholder="お問い合わせ内容")
            el-form-item
              el-button(class="block" type="primary" @click="onSubmit('form')") 送信
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
        company: [
          {
            required: true,
            message: '会社名を入力してください',
            trigger: 'change'
          }
        ],
        email: [
          {
            required: true,
            message: 'メールアドレスを入力してください',
            trigger: 'change'
          }
        ],
        content: [
          {
            required: true,
            message: '内容を入力してください',
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
