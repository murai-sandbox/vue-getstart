<template>
  <div class="login-container">
    <div class="login-form">
      <h2>ログイン</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            required 
            placeholder="example@example.com"
          >
        </div>
        <div class="form-group">
          <label for="password">パスワード</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required 
            placeholder="パスワードを入力"
          >
        </div>
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'ログイン中...' : 'ログイン' }}
        </button>
      </form>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'LoginView',
  setup() {
    const router = useRouter()
    const store = useStore()
    
    const email = ref('')
    const password = ref('')
    const isLoading = ref(false)
    const errorMessage = ref('')

    const handleLogin = async () => {
      isLoading.value = true
      errorMessage.value = ''

      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        
        router.push('/dashboard')
      } catch (error) {
        errorMessage.value = error.message
      } finally {
        isLoading.value = false
      }
    }

    return {
      email,
      password,
      isLoading,
      errorMessage,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 4px;
  text-align: center;
}
</style>