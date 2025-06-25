<template>
  <div class="home">
    <h1>Welcome to Form Application</h1>
    <div class="button-group">
      <router-link to="/form" class="btn btn-primary">入力フォーム</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px;
}

.button-group {
  margin-top: 30px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  margin: 0 10px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
