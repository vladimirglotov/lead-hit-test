<template>
  <div class="auth">
    <h1>LeadHit</h1>
    <el-form ref="authForm" v-model="authForm" :rules="authRules">
      <el-form-item prop="id">
        <el-input v-model="authForm.id" maxlength="24"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button :disabled="authForm.id.length !== 24" @click="getAuth()">Войти</el-button>
      </el-form-item>
      <input tabindex="-1" style="display: none" type="text">
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui';
import { mapActions } from 'vuex'
export default {

  data: function() {
    let validateId = (rule, value, callback) => {
    if (this.authForm.id.length !== 24) {
        callback(new Error('id сайта должен содержать 24 символа'));
      } else {
        callback();
      }
    };
    return {
      authForm: {
        id: ''
      },
      authRules: {
        id: [
          { validator: validateId, trigger: ['blur', 'change'] }
        ],
      },
    }
  },
  methods: {
    ...mapActions([
      'SET_SITE_ID'
    ]),
    async getAuth() {
      const id = this.authForm.id
      const path = 'https://track-api.leadhit.io/client/test_auth'
      const apiKey = '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo'
      const headers = {
        'api-key': apiKey,
        'leadhit-site-id': id
      }
      try {
        const res = await this.axios.get(path, {headers})
        console.log(this.$store);
        if (res.status === 200 && res.data.message === 'ok') {
          this.SET_SITE_ID(id)
          console.log('yes')
          this.$router.push('/')
        } else {
          Mmessage({
            message: 'Неверный id сайта',
            type: 'error'
          });
        }
      } catch (error) {
        Message({
          message: 'Ошибка авторизации',
          type: 'error'
        });
      }
    }
  }
}
</script>

<style lang="less">
  .auth {
    padding-top: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      margin-bottom: 20px;
    }
    .el-form {
      width: 320px;
    }
  }
</style>