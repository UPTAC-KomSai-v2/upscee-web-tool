<template>
    <div id="app">
      <!-- Anonymity Policy Overlay -->
      <div class="overlay" v-if="!policyConfirmed">
        <AnonymityPolicy @confirmed="policyConfirmed = true" />
      </div>
  
      <!-- Main content (will change based on route) -->
      <div :class="{ blurred: !policyConfirmed }">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import AnonymityPolicy from './components/AnonymityPolicy.vue';
  
  export default {
    name: 'App',
    components: {
      AnonymityPolicy,
    },
    data() {
      return {
        policyConfirmed: false, // Tracks whether the user has confirmed the anonymity policy
      };
    },
  };
  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    position: relative;
  }
  
  .blurred {
    filter: blur(10px); /* Increase blur intensity */
    pointer-events: none; /* Prevent interaction */
    user-select: none; /* Disable selection */
    position: relative;
    opacity: 0.7; /* Slight dimming effect */
  }
  
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6); /* Dark semi-transparent overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .policy-modal {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  