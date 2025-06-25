<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <h1>ダッシュボード</h1>
      <button @click="handleLogout" class="logout-btn">ログアウト</button>
    </div>
    
    <div class="dashboard-content">
      <div class="welcome-card">
        <h2>ようこそ！</h2>
        <p>認証に成功しました。このページは認証されたユーザーのみアクセス可能です。</p>
        <div class="user-info">
          <p><strong>ログインユーザー:</strong> {{ userEmail }}</p>
          <p><strong>ログイン時刻:</strong> {{ loginTime }}</p>
        </div>
      </div>
      
      <div class="feature-cards">
        <div class="card">
          <h3>機能 1</h3>
          <p>認証が必要な機能の例です。</p>
        </div>
        <div class="card">
          <h3>機能 2</h3>
          <p>プライベートなコンテンツにアクセスできます。</p>
        </div>
        <div class="card">
          <h3>機能 3</h3>
          <p>セキュアな操作を実行できます。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'DashboardView',
  setup() {
    const router = useRouter()
    const store = useStore()
    
    const userEmail = computed(() => store.state.user?.email || '')
    const loginTime = computed(() => store.state.user?.loginTime || '')

    const handleLogout = () => {
      store.dispatch('logout')
      router.push('/login')
    }

    return {
      userEmail,
      loginTime,
      handleLogout
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e0e0e0;
}

.dashboard-header h1 {
  color: #333;
  margin: 0;
}

.logout-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #d32f2f;
}

.dashboard-content {
  display: grid;
  gap: 2rem;
}

.welcome-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #4CAF50;
}

.welcome-card h2 {
  color: #4CAF50;
  margin-bottom: 1rem;
}

.user-info {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.user-info p {
  margin: 0.5rem 0;
  color: #666;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.card p {
  color: #666;
  line-height: 1.6;
}
</style>