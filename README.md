# Project Structure
```plaintext
UPSCEE-WEB-TOOL/
├── backend/
│   ├── src/
│   │   ├── controllers/
|   |   |   ├── evaluationController.js
│   │   ├── models/
|   |   |   ├── Evaluation.js
|   |   |   ├── Question.js
│   │   ├── routes/
|   |   |   ├── evaluationRoutes.js
│   │   ├── utils/
|   |   |   ├── db.js
│   │   └── app.js
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   └── up-logo.png
│   │   ├── components/
│   │   │   ├── CourseEvaluationForm.vue
|   |   |   ├── AnonymityPolicy.vue
│   │   │   └── LikertScale.vue
│   │   ├── router/
│   │   ├── store/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js
│   ├── .gitignore
│   ├── babel.config.js
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vue.config.js
├── README.md
```