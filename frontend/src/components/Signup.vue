<template>
    <div class="auth-container">
      <h2>Sign Up</h2>
      
      <!-- Display success or failure message -->
      <div v-if="message" :class="{'success-message': isSuccess, 'error-message': !isSuccess}">
        {{ message }}
      </div>
  
      <form @submit.prevent="signup">
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
        <div class="form-group">
          <label for="enrolled_courses">Enrolled Courses (IDs)</label>
          <input
            type="text"
            id="enrolled_courses"
            v-model="enrolled_courses"
            placeholder="Enter course IDs (comma separated)"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignupPage',
    data() {
      return {
        student_id: '',
        password: '',
        enrolled_courses: '',
        message: '',      // To hold success or error message
        isSuccess: false, // Flag to determine success or failure
      };
    },
    methods: {
      async signup() {
        try {
          await this.$axios.post('/api/students/register', {
            student_id: this.student_id,
            password: this.password,
            enrolled_courses: this.enrolled_courses.split(',').map(course => course.trim()),
          });
    
          // Upon successful signup
          this.message = 'Sign up successful! Please log in.';
          this.isSuccess = true;
          this.$router.push('/login'); // Redirect to login page
        } catch (error) {
          // If error occurs during signup
          this.message = 'Error during sign up. Please try again.';
          this.isSuccess = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styling for signup form */
  .success-message {
    color: green;
    font-size: 1.2em;
    margin-bottom: 1em;
  }
  
  .error-message {
    color: red;
    font-size: 1.2em;
    margin-bottom: 1em;
  }
  </style>
  