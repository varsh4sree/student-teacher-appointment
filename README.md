# Student-Teacher Booking Appointment System

This is a web-based appointment booking system. It allows students to schedule appointments with teachers. The project is built using HTML, CSS, JavaScript, and Firebase.

## Technologies Used

- HTML and CSS
- JavaScript
- Firebase Authentication
- Firebase Firestore

## Features

### Student
- Register and log in
- Search for available teachers
- Book an appointment and send a message
- View appointment status

### Teacher
- Log in to access dashboard
- View appointment requests
- Approve or cancel appointments
- Read messages from students

### Admin
- Log in to admin dashboard
- Add, update, or delete teacher records
- Approve pending student and teacher registrations

## Firebase Setup (To Test the Project)

This project uses Firebase for authentication and data storage. To run it, you need your own Firebase project.

Follow these steps:

1. Go to https://console.firebase.google.com/ and create a new project.
2. Enable Authentication and turn on Email/Password as a sign-in method.
3. Set up a Firestore Database with rules as needed.
4. In the Firebase Console, register a new web app and get your configuration settings.
5. Replace the Firebase config object in each relevant .html or .js file with your own config.

Example placeholder:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};
// Replace with your own Firebase config to run this project
```

This setup is necessary for authentication and database functionality to work.

## How to Run

1. Clone or download the repository.
2. Replace the Firebase config values with your own.
3. Open `index.html` in a browser to start.
4. Make sure Firebase services are properly set up before testing features.

You can also clone this repository and test it by replacing the placeholder Firebase config with your own Firebase project settings.

## Testing

- Log in with correct and incorrect credentials
- Register new users and confirm approval flow works
- Book appointments and verify teacher approval works
- View messages and data updates in Firestore

## Challenges Faced

- Understanding Firebase authentication rules and structure
- Handling user approval status with Firestore conditions
- Making the UI responsive across different screen sizes
- Managing navigation and logic without using frameworks

## Issues/Improvements

The core features are working. The UI is simple and the code is organized in separate files. Firebase integration is complete. Future improvements can include better form validation, UI design upgrades, and more detailed logging.

Done by Varshasree.


