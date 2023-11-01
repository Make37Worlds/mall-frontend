<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Personal Info" name="personal-info">
                <personal-info :user-info="userInfo" />
              </el-tab-pane>
              <el-tab-pane label="Account" name="account">
                <account :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Account from './components/Account'
import PersonalInfo from './components/PersonalInfo'
import { getInfo } from '@/api/user'

export default {
  name: 'Profile',
  components: { UserCard, Account, PersonalInfo },
  data() {
    return {
      user: {},
      activeTab: 'personal-info',
      userInfo: {
        nickname: '',
        level: '',
        mobile: '',
        email: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
    this.getInfo()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: '',
        avatar: this.avatar
      }
    },
    getInfo() {
      return new Promise((resolve, reject) => {
        getInfo(this.name).then(response => {
          console.log(response)
          response.data
          this.userInfo.nickname = response.data.nickname
          this.userInfo.level = response.data.level
          this.userInfo.mobile = response.data.mobile
          this.userInfo.email = response.data.email
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
</script>
