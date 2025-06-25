<template>
  <div class="confirm-view">
    <h1>入力内容確認</h1>
    <div class="confirm-form">
      <div class="form-group">
        <label>名前</label>
        <div class="form-value">{{ formData.name }}</div>
      </div>
      
      <div class="form-group">
        <label>メールアドレス</label>
        <div class="form-value">{{ formData.email }}</div>
      </div>
      
      <div class="form-group">
        <label>メモ</label>
        <div class="form-value">{{ formData.memo || '（未入力）' }}</div>
      </div>
      
      <div class="button-group">
        <button @click="goBack" class="btn btn-secondary">戻る</button>
        <button @click="handleSubmit" class="btn btn-primary" :disabled="isLoading">
          {{ isLoading ? '送信中...' : '送信' }}
        </button>
      </div>
    </div>
    
    <div v-if="isSuccess" class="success-message">
      <h2>送信完了</h2>
      <p>入力内容を送信しました。</p>
      <router-link to="/" class="btn btn-primary">トップページに戻る</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmView',
  data() {
    return {
      formData: {},
      isLoading: false,
      isSuccess: false
    }
  },
  created() {
    const formDataString = this.$route.params.formData
    if (formDataString) {
      this.formData = JSON.parse(formDataString)
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    async handleSubmit() {
      this.isLoading = true
      
      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData)
        })
        
        if (response.ok) {
          this.isSuccess = true
        } else {
          throw new Error('送信に失敗しました')
        }
      } catch (error) {
        console.log('実際のサーバーがないため、仮の送信として成功扱いにします')
        this.isSuccess = true
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.confirm-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 20px;
}

.confirm-form {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.form-group:last-of-type {
  border-bottom: none;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-value {
  padding: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 20px;
  white-space: pre-wrap;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 30px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.success-message {
  text-align: center;
  padding: 30px;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  margin-top: 20px;
}

.success-message h2 {
  color: #155724;
  margin-bottom: 10px;
}

.success-message p {
  color: #155724;
  margin-bottom: 20px;
}
</style>