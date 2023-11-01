<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form label-position="top">
          <el-form-item label="Nickname">
            {{ userInfo.nickname }}
          </el-form-item>
          <el-form-item label="Level">
            {{ userInfo.level }}
          </el-form-item>
          <el-form-item label="Mobile">
            {{ userInfo.mobile }}
          </el-form-item>
          <el-form-item label="Email">
            {{ userInfo.email }}
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  props: {
    userInfo: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
