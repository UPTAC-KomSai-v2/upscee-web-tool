<template>
    <div class="auth-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="student_id">Student ID</label>
          <input
            type="text"
            id="student_id"
            v-model="student_id"
            placeholder="Enter your Student ID"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <router-link to="/signup">Sign up here</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage', // Renamed to multi-word component name
    data() {
      return {
        student_id: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await this.$axios.post('/api/students/login', {
            student_id: this.student_id,
            password: this.password,
          });
  
          // Store JWT token in localStorage or Vuex for later authentication
          localStorage.setItem('token', response.data.token);
          this.$router.push('/EvalForm'); // Redirect to dashboard after successful login
        } catch (error) {
          console.error(error);
          alert('Invalid login credentials');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styling for login form */
  </style>
  