<template>
  <div className="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import adminDashboard from './admin'
import editorDashboard from './editor'
// 只有admin dashboard
export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },

  created() {
    this.currentRole = 'adminDashboard'
  }
}
</script>
