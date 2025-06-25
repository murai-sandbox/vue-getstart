<template>
  <div class="form-view">
    <h1>入力フォーム</h1>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label for="name">名前</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="form-control"
          placeholder="お名前を入力してください"
        />
      </div>
      
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="form-control"
          placeholder="メールアドレスを入力してください"
        />
      </div>
      
      <div class="form-group">
        <label for="memo">メモ</label>
        <textarea
          id="memo"
          v-model="form.memo"
          rows="5"
          class="form-control"
          placeholder="メモがあれば入力してください"
        ></textarea>
      </div>
      
      <div class="button-group">
        <router-link to="/" class="btn btn-secondary">戻る</router-link>
        <button type="submit" class="btn btn-primary">確認画面へ</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        memo: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        name: 'confirm',
        params: {
          formData: JSON.stringify(this.form)
        }
      })
    }
  }
}
</script>

<style scoped>
.form-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 20px;
}

.form {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
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

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>