🔐 Firebase Authentication System
📌 Project Overview

This project implements a secure and production-style authentication system using Firebase Authentication.
It demonstrates real-world login workflows commonly used in modern web applications.

The application supports email/password authentication, Google OAuth, password recovery, protected routes, and session handling.

✨ Features

User Signup with Email & Password

Secure Login authentication

Google OAuth Login integration

Forgot Password with email reset

Auto redirect after successful authentication

Protected Dashboard (unauthorized users restricted)

Logout and session management

🛠️ Tech Stack

Frontend: HTML5, CSS3, JavaScript

Authentication: Firebase Authentication

Hosting (optional): Netlify / Vercel / Firebase Hosting

⚙️ Setup & Configuration
1️⃣ Create Firebase Project

Go to Firebase Console

Create a new project

Enable Authentication

2️⃣ Enable Sign-in Methods

Enable the following providers:

Email / Password

Google Authentication

Add authorized domains:

localhost
127.0.0.1

3️⃣ Firebase Configuration

Update firebase.js with your Firebase project credentials:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

▶️ Running the Project

⚠️ Firebase requires a local server.

Recommended:

Open project in VS Code

Install Live Server

Right-click index.html → Open with Live Server

🔐 Authentication Flow

New user registers via Signup

Existing user logs in via Email/Password or Google

Successful authentication redirects to Dashboard

Unauthorized access redirects to Login

Logout clears session and redirects to Login

📚 Learning Outcomes

Understanding Firebase Authentication workflows

Implementing OAuth-based authentication

Managing user sessions securely

Protecting routes in frontend applications

Handling authentication errors gracefully

🎓 Use Case

This project is suitable for:

Internship applications

Academic mini-projects

Portfolio / GitHub showcase

Learning real-world authentication systems

🚀 Future Enhancements

User profile management

Firestore database integration

Role-based access control

Deployment on Firebase Hosting

Conversion to React application

👤 Author

Paruchuru Vyshnavi
Aspiring Full-Stack Developer

📄 License

This project is open-source and available for educational use.
