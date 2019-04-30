<template>
  <div :style="boxStyle">
    <div class="continer">
      <el-row>
        <el-col :span="24"><h1>登 录</h1></el-col>
      </el-row>
      <el-form ref="form" :model="formData" :rules="rules">
        <el-form-item prop="nick">
          <el-input v-model="formData.nick" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" v-model="formData.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-row class="align-left">
        <el-col :span="24">
          <el-checkbox v-model="rember">记住账号&密码</el-checkbox>
        </el-col>
      </el-row>
      <el-row class="el-row-btn">
        <el-col :span="24">
          <el-button type="primary" @click="onSubmit">LOGIN</el-button>
          <el-button @click="onReset">RESET</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { Verify } from '../../config/LoginInfo.js'

export default {
  data () {
    return {
      boxStyle: {
        background: '#ccc',
        paddingTop: '0px',
        height: 0
      },
      rember: false,
      formData: {
        nick: '',
        pwd: ''
      },
      rules: {
        nick: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onLoad () {
      let _cat = window.localStorage.getItem('login_msg') || ''
      if (_cat) {
        [this.formData.nick, this.formData.pwd] = _cat.split('|')
        this.rember = true
      }
    },
    setBoxTop () {
      let mTop = (window.innerHeight - 400) / 2
      this.boxStyle.paddingTop = mTop + 'px'
      this.boxStyle.height = window.innerHeight - (mTop + 1) + 'px'
    },
    onReset () {
      this.formData.nick = ''
      this.formData.pwd = ''
    },
    onSubmit () {
      this.$refs.form.validate(res => {
        if (res) {
          Verify(this.formData).then(() => {
            console.log('LOGIN OK!')
            if (this.rember) {
              window.localStorage.setItem('login_msg', this.formData.nick + '|' + this.formData.pwd)
            } else {
              window.localStorage.setItem('login_msg', '')
            }
          }).catch(() => {
            console.log('LOGIN ERR!')
          })
        }
      })
    }
  },
  mounted () {
    this.setBoxTop()
    this.onLoad()
  }
}
</script>

<style>
.continer {
  width: 60%;
  max-width: 500px;
  height: 300px;
  padding: 50px 60px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
}
.el-row-btn {
  padding-top: 20px;
}
.align-left {
  text-align: left;
}
</style>
