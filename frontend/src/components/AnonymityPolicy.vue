<template>
    <div class="overlay">
      <div class="policy-modal">
        <h2>Anonymity Policy</h2>
        <p>The purpose of this evaluation is to gather honest and constructive feedback to improve the quality of courses offered. Your input is highly valued and contributes to the continuous enhancement of academic standards.</p>
        <p><strong>Anonymity Guarantee:</strong></p>
        <ul>
          <li>Your responses will remain strictly anonymous. At no point will your name, student ID, or any identifying information be associated with your feedback.</li>
          <li>Data collected will be aggregated and analyzed only in group format. Individual responses will never be shared.</li>
        </ul>
        <p><strong>Data Security:</strong></p>
        <ul>
          <li>All submitted data is stored securely and only authorized personnel can access it.</li>
          <li>No identifiable information will be collected or stored during this evaluation process.</li>
        </ul>
        <p><strong>Usage of Feedback:</strong></p>
        <ul>
          <li>Your responses will be used solely for the purpose of improving courses and teaching methodologies.</li>
          <li>No punitive actions will be taken against students based on the feedback provided.</li>
        </ul>
        <p>By clicking "I Agree," you confirm that you have read and understood the anonymity policy and agree to participate in this course evaluation voluntarily.</p>
        <div class="button-container">
          <button @click="confirmPolicy" class="confirm-button">I Agree</button>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    name: "AnonymityPolicy",
    methods: {
      confirmPolicy() {
        this.$emit("confirmed");
      },
    },
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .policy-modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 90%;
    max-width: 400px;
    max-height: 80vh; /* Ensure modal doesn’t exceed viewport height */
    overflow-y: auto; /* Enable scrolling if content exceeds modal height */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #800000; /* UP Maroon */
  }
  
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  ul {
    text-align: left;
    padding-left: 20px;
    margin-bottom: 20px;
  }
  
  .button-container {
    margin-top: 20px;
    position: sticky; /* Ensures the button is always visible */
    bottom: 0; /* Sticks the button to the bottom of the modal */
    background: white; /* Keeps the background consistent */
    padding: 10px 0;
  }
  
  .confirm-button {
    background-color: #42b983;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .confirm-button:hover {
    background-color: #36936b;
  }
</style>  