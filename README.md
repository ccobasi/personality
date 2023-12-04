# Personality Quiz App

The Personality Quiz App is a web application that allows users to take personality quizzes and receive personalized results. It is built using Django for the backend and Vue.js for the frontend.

## Features

- Dynamic and engaging quizzes
- Personalized quiz results

## Technologies Used

- **Backend:**

  - Django: A high-level Python web framework
  - Django REST Framework: A powerful and flexible toolkit for building Web APIs

- **Frontend:**

  - Vue.js: A progressive JavaScript framework for building user interfaces
  - Axios: A promise-based HTTP client for making API requests

- **Database:**
  - SQLite (for development)
  - Consider using PostgreSQL, MySQL, or other databases for production

## Getting Started

### Prerequisites

- Python (3.6 or higher)
- Node.js and npm
- Django and Django REST Framework
- Vue CLI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ccobasi/personality.git
   ```
2. cd personality-quiz-app/backend

3. pip install -r requirements.txt

4. python manage.py migrate

5. python manage.py runserver

6. cd ../frontend

7. npm install

8. npm run dev


### Admin Panel

Access the Django admin panel at http://localhost:8000/admin/ with the following credentials:

Username: admin
Password: admin101


### License

This project is licensed under the MIT License - see the LICENSE file for details.

