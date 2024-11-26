<template>
  <div class="form-container">
    <header class="form-header">
      <img src="@/assets/up-logo.png" alt="UP System Logo" class="up-logo" />
      <h1>UP Student Course Effectiveness Evaluation (UPSCEE)</h1>
      <p>An initiative by the University of the Philippines to gather meaningful feedback for course improvements.</p>
    </header>
    <form @submit.prevent="submitEvaluation" class="evaluation-form">
      <div v-for="(question, index) in questions" :key="index" class="question-block">
        <p class="question-text">{{ question.text }}</p>
        <div class="options-container">
          <label v-for="n in [1, 2, 3, 4, 5]" :key="n" class="option-label">
            <input
              type="radio"
              :value="n"
              v-model="responses[index]"
              class="option-input"
            /> {{ n }}
          </label>
          <label class="option-label">
            <input
              type="radio"
              value="N/A"
              v-model="responses[index]"
              class="option-input"
            /> Not Applicable
          </label>
        </div>
      </div>

      <h3>Qualitative Feedback</h3>
      <label class="textarea-label">
        <p>1. What do you think are the strengths of the course?</p>
        <textarea v-model="form.strengths" rows="4" class="textarea-input" placeholder="Enter your response"></textarea>
      </label>
      <label class="textarea-label">
        <p>2. What do you think are the areas for improvement for the course?</p>
        <textarea v-model="form.improvements" rows="4" class="textarea-input" placeholder="Enter your response"></textarea>
      </label>

      <div class="checkbox-container">
        <label>
          <input type="checkbox" v-model="form.confirmation" required class="checkbox-input" />
          I have read and understood the anonymity policy and instructions.
        </label>
      </div>

      <button type="submit" class="submit-button">Submit Evaluation</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        course: 'Buffer',
        strengths: '',
        improvements: '',
        confirmation: false,
      },
      responses: Array(18).fill(null), // Stores responses for 18 questions
      questions: [
        { text: 'The topics covered in this course are important to my program of study.' },
        { text: 'Time allotted for activities is adequate.' },
        { text: 'The mode of course delivery was effective.' },
        { text: 'This course stimulates me to learn more.' },
        { text: 'The topics covered in this course are relevant to my program of study.' },
        { text: 'The use of learning management systems was appropriate for learning.' },
        { text: 'The learning resources/materials were helpful in achieving the course learning outcomes.' },
        { text: 'The course learning outcomes were clearly stated.' },
        { text: 'I enjoyed this course.' },
        { text: 'The learning resources/materials were up-to-date.' },
        { text: 'The course parameters (e.g., requirements, rubrics) were clearly specified.' },
        { text: 'The course syllabus provided clear and adequate guidance on the course.' },
        { text: 'The assessment methods were aligned with the course learning outcomes.' },
        { text: 'I would still take this course even if it were not required.' },
        { text: 'The learning activities were relevant.' },
        { text: 'This course is essential to the degree program I am in.' },
        { text: 'The course was well organized.' },
        { text: 'The learning activities developed critical thinking.' }
      ],
    };
  },
  methods: {
    async submitEvaluation() {
      try {
        const response = await fetch('http://localhost:8080/api/evaluations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                responses: this.responses, 
                strengths: this.form.strengths,
                improvements: this.form.improvements,
            }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Unknown error occurred');
        }
            
        alert('Submitted successfully');
      } catch (error) {
        alert('Error: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.evaluation-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.question-block {
  display: flex;
  flex-direction: column;
  text-align: left; /* Align text to the left */
}

.question-text {
  font-weight: bold;
  margin-bottom: 10px;
}

.options-container {
  display: flex;
  gap: 15px;
}

.option-label {
  display: flex;
  align-items: center;
  gap: 5px;
}

.option-input {
  margin-right: 5px;
}

.textarea-label {
  display: flex;
  flex-direction: column;
  text-align: left; /* Align text to the left */
}

.textarea-input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 5px;
}

.checkbox-container {
  margin-top: 20px;
  text-align: left; /* Align checkbox label to the left */
}

.submit-button {
  background-color: #42b983;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #36936b;
}

.form-header {
  text-align: left; /* Align header text to the left */
  margin-bottom: 20px;
}

.up-logo {
  max-width: 100px;
  margin-bottom: 10px;
}

h1 {
  font-size: 24px;
  color: #800000; /* UP Maroon */
  text-align: left; /* Align header to the left */
}

p {
  color: #333;
  text-align: left; /* Align paragraphs to the left */
}
</style>

